import user_dataDBPool from "./user_dataDBPool"

const queryOnUser_dataDB = async (sql, values) => {
    var connection;
    try{
        connection = await user_dataDBPool.getConnection();
        const result = await connection.query(sql, values);
        return result
    } catch (err) {
        throw err
    }
    finally {
        if(connection) connection.release();
    }
}

export default queryOnUser_dataDB;