import express,{ json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

import userProfileRouter from "./routes/userProfileRoutes/userProfileRouter.js";
import eDriveRouter from "./routes/commonservicesRoutes/eDrive/eDriveRouter.js";
import pdfProvider from "./routes/commonservicesRoutes/providePdf/PdfProvider.js";

dotenv.config();

const app = express();


app.use(cors());
app.use(json());

app.get("/test",(req,res) => {

    const config = {headers :{
        a: "hello",
        origin: "http://localhost:3000",
       // host: "http://localhost:3000"
    }}
    const url = `http://localhost:5001/auth/login`;
    axios
      .post(url, {identifier: "abcd2334",password: "1234gsdg"},config)
      .then(result => res.send(result))
      .catch(err => res.send(err.response.data));
})

app.use("/profile",userProfileRouter);

app.use("/edrive",eDriveRouter);

app.post("/give_pdf",pdfProvider);


app.listen(5002, () => {
    console.log("listening to port 5002");
})