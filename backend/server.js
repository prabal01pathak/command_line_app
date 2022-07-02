import express from "express";
import cors from "cors";
import { Logger } from "./middlewares/logging.js"

const app = express()

// initilized logger class
const logger = new Logger()
const port = process.env.PORT || 8000

// cors middleware
app.use(cors())

// logging middleware
app.use(logger.handle_request)

app.get("/", (req, res, next) => {
  res.json({ message: "How are you" })
})

async function message() {
  console.log(`${logger.color(`Server is running on the port: ${port}`, "info2")}`);
}

app.listen(8000, message)
