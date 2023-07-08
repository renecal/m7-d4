import db from "../database/database.js";

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
                    text: "SELECT id, nombre, email FROM usuarios",
                };
                let result= await db.query(query);
                resolve(result.rows)
            } catch (error) {
                reject("Error al consultar los usuarios en la base de datos.");
            }
        });
    }
}
export default Usuario;