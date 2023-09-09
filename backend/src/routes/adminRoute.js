import { Router } from "express";
import AdminController from "../controllers/adminController.js";

const router = Router();
const adminController = new AdminController();

router.get("/userList", adminController.userList);

router.get("/changeUsertoSeller", adminController.changeUsertoSeller);

export default router;