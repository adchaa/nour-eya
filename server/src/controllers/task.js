import { HttpError, StatusCode } from "../util/Http.js";
import Task from "../models/task.js";

export async function GetTaskByID(req, res, next) {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    res.json(task);
  } catch {
    next(new HttpError("something unexpectedly happened"));
  }
}

export async function AddTask(req, res, next) {
  try {
    const { name, description, date } = req.body;
    const task = await Task.create({
      name: name,
      description: description,
      date: date,
    });
    res.json(task);
  } catch {
    next(new HttpError("something unexpectedly happened"));
  }
}

export async function GetAllTasks(req, res, next) {
  try {
    const tasks = await Task.find({});
    res.json(tasks);
  } catch {
    next(new HttpError("something unexpectedly happened"));
  }
}

export async function DeleteTask(req, res, next) {
  try {
    const { id } = req.params;
    const result = await Task.deleteOne({ _id: id });
    if (result.deletedCount === 0) {
      return next(
        new HttpError("there is no task with that id", StatusCode.BadRequest)
      );
    }
    res.json({
      message: "deleted successfully",
    });
  } catch {
    next(new HttpError("something unexpectedly happened"));
  }
}

export async function UpdateTask(req, res, next) {
  try {
    const { id } = req.params;
    const { name, description, date } = req.body;
    const result = await Task.updateOne(
      { _id: id },
      { name: name, description: description, date: date }
    );
    if (result.modifiedCount === 0) {
      new HttpError("there is no task with that id", StatusCode.BadRequest);
    }
    res.json({
      message: "updated successfully",
    });
  } catch {
    next(new HttpError("something unexpectedly happened"));
  }
}
