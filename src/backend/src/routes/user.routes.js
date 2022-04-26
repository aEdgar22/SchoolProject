import { Router } from "express";
const router = Router();
import  userController  from "../controllers/user.controller.js";

 // http://localhost:8080/api/v1/user/
router.get("/",userController.inicio)

export default router;