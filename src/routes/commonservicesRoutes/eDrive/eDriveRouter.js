import { Router } from "express";

import ProvideSavedWritings from "./controllers/provideSavedWritings.js";
import clearSlot from "./controllers/clearSlot.js";
import saveWriting from "./controllers/saveWriting.js";

const eDriveRouter = Router();

eDriveRouter.post("/give_saved_writings", (req, res) =>
  ProvideSavedWritings(req, res)
);
eDriveRouter.post("/clear_slot", (req,res) => clearSlot(req,res));
eDriveRouter.post("/save_writing", (req,res) => saveWriting(req,res));

export default eDriveRouter;
