import { Router } from "express";
import AdminController from "../controllers/adminController.js";

const router = Router();
const adminController = new AdminController();

router.get("/userList", adminController.userList);

router.get("/changeUsertoSeller", adminController.changeUsertoSeller);

router.delete("/deleteUser", adminController.deleteUser);

router.post("/blockUser", adminController.blockUser);

export default router;