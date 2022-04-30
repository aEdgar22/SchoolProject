import { Router } from "express";
const router = Router();
import  userController  from "../controllers/user.controller.js";
import auth from "../controllers/auth.controller.js";


 // http://localhost:3000/api/v1/user/
router.get("/",userController.inicio)

// http://localhost:3000/api/v1/user/singUp
router.post("/singUp", auth.singUp)

export default router;