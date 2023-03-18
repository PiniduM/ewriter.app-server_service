import ValidateTokenOrHandleErrors from "../../contollers/validateTokenOrHandleErrors.js";
import {
  validateFullName,
  validateAge,
  validateGender,
  validateCountry,
  validateOccupation,
} from "./controllers/validateProfileData.js";
import user_dataDB from "../../contollers/user_dataDBconnection.js";
import informProfileCreation from "./controllers/informProfileCreation.js";
const createProfile = async (reqData, res) => {
  const loginToken = reqData.loginToken;

  const usercredentials = ValidateTokenOrHandleErrors(loginToken, res);
  if (!usercredentials) return;

  const id = usercredentials.id;

  const profileData = reqData.profileData;


  const fullName = validateFullName(profileData.fullName)
    ? profileData.fullName
    : "n";

  const age = validateAge(profileData.age) ? profileData.age : "n";

  const gender = validateGender(profileData.gender) ? profileData.gender : "n";

  const country = validateCountry(profileData.country)
    ? profileData.country
    : "n";

  const occupation = validateOccupation(profileData.occupation)
    ? profileData.occupation
    : "n";

  informProfileCreation(loginToken)
  .then(response => {
    if(response === "updated"){
      const sql =
        "INSERT INTO profile_data ( id,full_name, age, gender, country, occupation) VALUES (?, ?, ?, ?, ?, ?);";
      const values = [id, fullName, age, gender, country, occupation];
    
      user_dataDB
        .query(sql, values)
        .then(() => {
          res.status(200).send("profile_created");
        })
        .catch(() => {
          res.status(500).send("unexpected_ result");
        });
    }else {
      res.status(406).send("unexpected_result");
    }
  })
  .catch (() => {
    res.status(500).send("inform_error")
  })

};

export default createProfile;
