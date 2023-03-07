import express,{ json } from "express";
import cors from "cors";
import dotenv from "dotenv";

import userProfileRouter from "./routes/userProfileRoutes/userProfileRouter.js";
import eDriveRouter from "./routes/commonservicesRoutes/eDrive/eDriveRouter.js";
import pdfProvider from "./routes/commonservicesRoutes/providePdf/PdfProvider.js";

dotenv.config();

const app = express();


app.use(cors());
app.use(json());


app.use(userProfileRouter);

app.use("/edrive",eDriveRouter);

app.post("/give_pdf",pdfProvider);


app.listen(5002, () => {
    console.log("listening to port 5002");
})