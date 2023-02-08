import mysql from "mysql2/promise";

const connectionData = {
    user: "root",
    host: "localhost",
    password: "root123@#",
    database: "user_data"
}

const user_dataDB = await mysql.createConnection(connectionData);

export default user_dataDB;