import { Router } from "express";
import {
  AddTask,
  DeleteTask,
  GetAllTasks,
  GetTaskByID,
  UpdateTask,
} from "../controllers/task.js";

const router = Router();

router.get("/:id", GetTaskByID);
router.get("/", GetAllTasks);
router.post("/", AddTask);
router.delete("/:id", DeleteTask);
router.patch("/:id", UpdateTask);

export default router;
