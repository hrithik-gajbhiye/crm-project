import expess from "express"
import { signup } from "../controller/auth.controller.js"

const router = expess.Router()

router.post("/sign-up", signup )

export default router 