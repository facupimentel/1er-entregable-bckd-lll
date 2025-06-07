import express from "express"
import "dotenv/config.js"
import router from "./src/routers/mocks.router.js";
import errorHandler from "./src/middlewares/errorHandler.mid.js";
import pathHandler from "./src/middlewares/pathHandler.mid.js";
import dbConnect from "./src/helpers/dbConnect.helper.js";

const server = express()
const port = process.env.PORT
const ready = async () => {
    console.log("server ready on port", port)
    await dbConnect(process.env.MONGO)
    };
server.listen(port, ready)


// middlewares
server.use(express.json())
server.use(express.urlencoded({extended: true}))



// router
server.use("/", router)
server.use(pathHandler)
server.use(errorHandler)
