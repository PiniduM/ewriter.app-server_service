import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const poolData = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: process.env.DB_CONNECTION_LIMIT || 100,
    waitForConnections: true
}


const user_dataDBPool = mysql.createPool(poolData);

export default user_dataDBPool;