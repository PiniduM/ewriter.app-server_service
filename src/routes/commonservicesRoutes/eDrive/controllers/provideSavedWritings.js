import user_dataDBPool from "../../../../contollers/db/user_dataDBPool.js";
import ValidateTokenOrHandleErrors from "../../../../contollers/validateTokenOrHandleErrors.js";

const ProvideSavedWritings = (req, res) => {
  const loginToken = req.body.loginToken;

  const usercredentials = ValidateTokenOrHandleErrors(loginToken, res);
  if (!usercredentials) return;

  const id = usercredentials.id;

  const sql = "SELECT * FROM saved_writings WHERE user_id = ? LIMIT 1;";
  const values = [id];

  user_dataDBPool
    .query(sql, values)
    .then((result) => {
      const rows = result[0];
      if (rows[0]) res.status(200).json(rows[0]);
      else {
        res.status(200).json({});
      }
    })
    .catch((err) => {

      console.log(err);
      res.status(500).send(err);
    });
};

export default ProvideSavedWritings;