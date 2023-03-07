import ValidateTokenOrHandleErrors from "../../../../contollers/validateTokenOrHandleErrors.js";
import updateSlot from "../function/updateSlot.js";

const saveWriting = (req, res) => {
  const data = req.body;
  const loginToken = data.loginToken;

  const credentials = ValidateTokenOrHandleErrors(loginToken, res);

  if (!credentials) return;
  const userId = credentials.id;

  const slotId = data.slotId;
  const writing = data.writing;

  updateSlot(userId, slotId, writing);
  res.status(200).send("completed");
};

export default saveWriting;
