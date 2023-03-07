import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const connectionData = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}

const user_dataDB = await mysql.createConnection(connectionData);

export default user_dataDB;