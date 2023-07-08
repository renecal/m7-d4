import pkg from "pg";
const { Pool } = pkg;

import Cursor from 'pg-cursor';

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "root",
    database: "m7_d4_local_db",
    port: 5432,
    max: 15,
    idleTimeoutMillis: 10000,
    connectionTimeoutMillis: 2000,
});

const client = await pool.connect();

const main = async () => {
    try {
        const text = "SELECT * FROM USUARIOS";
        const cursor = client.query(new Cursor(text));

        let flag = true;
        while (flag) {
            let resultado = await cursor.read(1);
            if (
                resultado[0]?.email == "carloncho@gmail.com" ||
                resultado.length == 0
            ) {
                console.log(resultado);
                flag = false;
            }
        }
        
        cursor.close();
        client.release();
        await pool.end();
    } catch (error) {
        console.log(error);
    }
};

main();

/* cursor.read(100, (err, rows) => {
    cursor.close(() => {
        client.release();
    });
}); */