import { Router } from "express";
import giveProfileData from "./giveProfileData.js";
import createProfile from "./createProfile.js";
import updateProfile from "./updateProfile.js"

const userProfileRouter = Router();


userProfileRouter.post("/giveprofiledata",(req, res) => giveProfileData(req.body,res));

userProfileRouter.post("/createprofile",(req, res) => createProfile(req.body,res));

userProfileRouter.post("/updateprofile",(req, res) => updateProfile(req.body,res));


export default userProfileRouter;