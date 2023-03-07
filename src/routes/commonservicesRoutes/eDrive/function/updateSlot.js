import user_dataDB from "../../../../contollers/user_dataDBconnection.js";

const updateSlot = (userId, slotId, newValue) => {

  const sql = "UPDATE saved_writings SET " + slotId +" = ? WHERE user_id = ? LIMIT 1 ;"

  const values = [newValue, userId];

  user_dataDB.query(sql, values).catch((err) => console.log(err)); //not necessary
};

export default updateSlot;
