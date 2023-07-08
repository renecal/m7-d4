import pkg from "pg";
import dotenv from "dotenv";
import * as path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const { Pool } = pkg;

let ssl;
if (process.env.NODE_ENV.includes("production")) {
    ssl = {
        rejectUnauthorized: false,
    }
    dotenv.config({path: path.resolve(__dirname, "../../.env.production")})
} else {
    dotenv.config({ path: path.resolve(__dirname, "../../.env.development")});
}


const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    max: 15,
    idleTimeoutMillis: 10000,
    connectionTimeoutMillis: 2000,
    ssl
});

export default pool;
