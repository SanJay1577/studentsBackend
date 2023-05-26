import express from "express"
import dotenv from "dotenv"
import { studentsRouter } from "./Routers/students.js";

//confgure the environment
dotenv.config();
const PORT = process.env.PORT
//initiating server
const app = express();
//middleware
app.use(express.json());

//studers routers
app.use("/students",studentsRouter)
//starting ther server
app.listen(PORT, ()=>console.log("server running in localhost:9090"))