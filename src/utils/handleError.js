import moment from "moment";
import fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

moment.locale("es");   
const messageError = (codigoError, stack) => {
    let errores = {
        "42P01": {
            message: "No existe la tabla que desea consultar.",
        },
        "42601": {
            message: "Error de sintaxis en la consulta, revise el código."
        },
        "42703": {
            message: "Intenta consulta una columna que no existe."
        }
    };

    let error = errores[codigoError];
    if (error) {
        registrarError(codigoError, error, stack);
        return error;
    } else {
        let error = {
            message: "Error desconocido",
            code: codigoError,
        };
        registrarError(codigoError, error, stack);
        return error;
    }

}


const registrarError = (codigoError, error, stack) => {
    let fecha = moment().format("MMMM Do YYYY, h:mm:ss a");
    error.fecha = fecha;
    let texto = `Hora de error: ${fecha}\nCódigo error: ${codigoError}\nMensaje error: ${error.message}\nStack Error: ${stack}`;
    let prefijoLog = moment().format("DD-MM-YYYY h_mm_ss a");
    console.log("prefijo:", prefijoLog);
    fs.writeFileSync(
        path.resolve(__dirname, "../logError", `${prefijoLog}-log.txt`),
        texto,
        "utf8"
    );
}
export default messageError;