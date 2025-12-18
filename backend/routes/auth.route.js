import expess from "express"
import { signin, signup } from "../controller/auth.controller.js"

const router = expess.Router()

router.post("/sign-up", signup )
router.post("/sign-in", signin )

export default router 