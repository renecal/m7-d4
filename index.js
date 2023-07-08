import "dotenv/config";
import dotenv from "dotenv";
import db from "./src/database/database.js";
import app from "./src/app.js";

const PORT = process.env.PORT || 3000;
const main = async () => {
    try {
        await db.connect();
        console.log("conectado a la base de datos.");
        app.listen(PORT, () => {
            console.log("servidor escuchando en puerto: " + PORT);
        });
    } catch (error) {
        console.log(error);
    }
};

main();
