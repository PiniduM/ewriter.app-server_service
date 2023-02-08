import express,{ json } from "express";
import cors from "cors";
import dotenv from "dotenv";

import userProfileRouter from "./routes/userProfileRoutes/userProfileRouter.js";

dotenv.config();

const app = express();


app.use(cors());
app.use(json());

app.use("/ewriter",userProfileRouter);


app.listen(5002, () => {
    console.log("listening to port http://localhost:5002/");
})