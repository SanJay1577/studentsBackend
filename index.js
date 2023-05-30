import express from "express"
import dotenv from "dotenv"
import { studentsRouter } from "./Routers/students.js";
import { userRouter } from "./Routers/users.js";
import { isAuthenticated } from "./Authentication/auth.js";
import cors from "cors"

//confgure the environment
dotenv.config();
const PORT = process.env.PORT
//initiating server
const app = express();
//middleware
app.use(express.json());
app.use(cors());

//studers routers
app.use("/students",isAuthenticated,studentsRouter)
app.use("/users",userRouter )
//starting ther server
app.listen(PORT, ()=>console.log("server running in localhost:9090")) 