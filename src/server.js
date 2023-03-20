import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";

import userProfileRouter from "./routes/userProfileRoutes/userProfileRouter.js";
import eDriveRouter from "./routes/commonservicesRoutes/eDrive/eDriveRouter.js";
import pdfProvider from "./routes/commonservicesRoutes/providePdf/PdfProvider.js";

dotenv.config();

const app = express();

const corsOptions = {
  origin: process.env.ALLOWED_ORIGIN,
  methods: ["POST"],
};

server.use(cors(corsOptions));

server.use((req, res, next) => {
  console.log(req.headers);
  if (req.headers["content-legth"] === "67") next();
  else res.status(500).send("unauthorized_access");
});
app.use(json());

app.use("/profile", userProfileRouter);

app.use("/edrive", eDriveRouter);

app.post("/give_pdf", pdfProvider);

app.listen(5002, () => {
  console.log("listening to port 5002");
});

//updateee 1234
