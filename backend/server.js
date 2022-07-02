import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { handleRequest, color } from "./middlewares/logging.js"

const app = express()

// initilized logger class
const port = process.env.PORT || 8000

// cors middleware
app.use(cors())
app.use(bodyParser.json())

// logging middleware
app.use(handleRequest)

app.get("/", (req, res, next) => {
  console.log(req)
  res.json({ message: "How are you" })
})

app.post("/", (req, res, next) => {
  let message = req.body.message
  let file = req.body.file
  console.log(file)
  res.send({ message: `Hi there your message is ${message}` })
})

async function message() {
  console.log(`${color(`Server is running on the port: ${port}`, "info2")}`);
}

app.listen(8000, message)
