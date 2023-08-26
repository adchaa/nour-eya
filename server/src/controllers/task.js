import { HttpError } from "../util/Http";
import Task from "../models/task";

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
