import { Router } from "express";
import MailController from "../controllers/mailController.js";

const router = Router();
const mailController = new MailController();

router.post("/sendVerificationCode", mailController.sendVerificationCode);

router.post("/verifyCode", mailController.verifyCode);

export default router;