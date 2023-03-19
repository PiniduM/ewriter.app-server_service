import user_dataDBPool from "../../../../contollers/db/user_dataDBPool.js";

const updateSlot = async (userId, slotId, newValue) => {
  const slotIds = ["slot1", "slot2", "slot3", "slot4", "slot5"];
  if (!slotIds.includes(slotId)) {
    return;
  }

  let connection;
  try {
    connection = user_dataDBPool.getConnection();
    const sql = `UPDATE saved_writings SET ${slotId} = ? WHERE user_id = ? LIMIT 1 ;`;
    const values = [newValue, userId];

    const result = await connection.query(sql, values);
    if (result[0].affectedRows === 0) {
      const sql = `INSERT INTO saved_writings(user_id, ${slotId}) VALUES(?, ?);`;
      const values = [userId, newValue];
      connection.query(sql, values).then((r) => console.log(r));
    }
  } catch (err) {
    console.log(err);
  } finally {
    if (connection) connection.release();
  }
};

export default updateSlot;
