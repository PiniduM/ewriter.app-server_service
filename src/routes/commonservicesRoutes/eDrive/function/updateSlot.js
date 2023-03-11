import user_dataDB from "../../../../contollers/user_dataDBconnection.js";

const updateSlot = async (userId, slotId, newValue) => {
  const slotIds = ["slot1", "slot2", "slot3", "slot4", "slot5"];
  if (!slotIds.includes(slotId)) {
    return;
  }

  try {
    const sql = `UPDATE saved_writings SET ${slotId} = ? WHERE user_id = ? LIMIT 1 ;`;
    const values = [newValue, userId];

    const result = await user_dataDB.query(sql, values);
    console.log(result[0].affectedRows);
    if (result[0].affectedRows === 0) {
      const sql = `INSERT INTO saved_writings(user_id, ${slotId}) VALUES(?, ?);`;
      const values = [userId, newValue];
      user_dataDB.query(sql, values).then((r) => console.log(r));
    }
  } catch (err){console.log(err)};
};

export default updateSlot;
