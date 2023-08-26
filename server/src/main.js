import express from "express";
import "./config/db.js";
import "dotenv/config";
import taskRouter from "./routes/task.js";
import { StatusCode, HttpError } from "./util/Http.js";

const app = express();
app.use(express.json());

//Routers
app.use("/task", taskRouter);

//page not found error 404
app.use((req, res, next) => {
  return next(new HttpError("Could not find this route", StatusCode.NotFound));
});

//error handler
app.use((error, req, res, next) => {
  if (!error) {
    return;
  }
  res.status(error.statusCode || StatusCode.InternalServerError);
  res.json({
    message: error.message,
  });
});

app.listen(process.env.PORT, () => {
  console.log("started the server at port " + process.env.PORT);
});
