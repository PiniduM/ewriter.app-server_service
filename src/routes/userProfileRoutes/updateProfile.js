import ValidateTokenOrHandleErrors from "../../contollers/validateTokenOrHandleErrors.js";
import {
  validateFullName,
  validateAge,
  validateGender,
  validateCountry,
  validateOccupation,
} from "./controllers/validateProfileData.js";
import user_dataDBPool from "../../contollers/db/user_dataDBPool.js";

const updateProfile = async (reqData, res) => {
  const loginToken = reqData.loginToken;

  const usercredentials = ValidateTokenOrHandleErrors(loginToken, res);
  if (!usercredentials) return;

  const id = usercredentials.id;

  let sqlSETsegment = "SET ";
  const values = [];

  const newUpdates = reqData.newUpdates;

  if (validateFullName(newUpdates.fullName)) {
    sqlSETsegment += " full_name = ?,";
    values.push(newUpdates.fullName);
  }

  if (validateAge(newUpdates.age)) {
    sqlSETsegment += " age = ?,";
    values.push(newUpdates.age);
  }

  if (validateGender(newUpdates.gender)) {
    sqlSETsegment += " gender = ?,";
    values.push(newUpdates.gender);
  }

  if (validateCountry(newUpdates.country)) {
    sqlSETsegment += " country = ?,";
    values.push(newUpdates.country);
  }

  if (validateOccupation(newUpdates.occupation)) {
    sqlSETsegment += " occupation = ?,";
    values.push(newUpdates.occupation);
  }

  if(values.length === 0) {
    res.status(406).send("no_data");
    return;
  }

  sqlSETsegment = sqlSETsegment.slice(0, -1); // to remove comma
  const sql = `UPDATE profile_data ${sqlSETsegment} WHERE id = ? LIMIT 1;`;
  values.push(id);

  user_dataDBPool
    .query(sql, values)
    .then((result) => {
      if (result[0].affectedRows === 1) res.status(200).send("updated");
      else {
        res.status(406).send("unknown_error");
      }
    })
    .catch(() => {
      res.status(500).send("unknown_error");
    });
};

export default updateProfile;
