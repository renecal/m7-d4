import db from "../database/database.js";
import messageError from "../utils/handleError.js";

class Usuario {
    constructor(id, nombre, email, password) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.password = password;
    }
    static findAll() {
        return new Promise(async (resolve, reject) => {
            try {
                let query = {
                    text: "SELECTT id, nombre, email FROM usuarios",
                };
                let result= await db.query(query);
                resolve(result.rows)
            } catch (error) {
                console.log(error.stack)
                console.log(messageError(error.code, error.stack));
                reject("Error al consultar los usuarios en la base de datos.");
            }
        });
    }
}
export default Usuario;