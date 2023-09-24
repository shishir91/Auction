import { Router } from "express";
import AdminController from "../controllers/adminController.js";

const router = Router();
const adminController = new AdminController();

router.get("/userList", adminController.userList);

router.get("/changeUsertoSeller", adminController.changeUsertoSeller);

router.get("/declineSeller", adminController.declineSeller);

router.delete("/deleteUser", adminController.deleteUser);

router.post("/blockUser", adminController.blockUser);

router.post("/unblockUser", adminController.unblockUser);

router.get("/requestedUser", adminController.requestedUser);

export default router;