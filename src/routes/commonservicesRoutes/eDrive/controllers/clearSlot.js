import ValidateTokenOrHandleErrors from "../../../../contollers/validateTokenOrHandleErrors.js";
import updateSlot from "../function/updateSlot.js";

const clearSlot = (req,res) => {
    const data = req.body;
    const loginToken = data.loginToken;

    const credentials = ValidateTokenOrHandleErrors(loginToken,res);

    if(!credentials) return;

    const userId = credentials.id;
    const slotId = data.slotId;

    updateSlot(userId,slotId,null)
    res.status(200).send("done");

}

export default clearSlot;