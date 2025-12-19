import express from "express"
import { adminOnly, verifyToken } from "../utils/verifyUser.js"
import { createTask, getTasks, getTasksById } from "../controller/task.controller.js"

const router = express.Router()

router.post("/create",verifyToken,adminOnly,createTask)
router.get("/",verifyToken,getTasks)
router.get("/:id",verifyToken,getTasksById)

export default router