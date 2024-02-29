import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import authRoute from "./routes/auth.js";


const app = express()

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/", authRoute);

app.listen(5000, ()=>{
    console.log("app is running on port 5000")
})