import { Router } from "express";
import MailController from "../controllers/mailController.js";

const router = Router();
const mailController = new MailController();

router.post("/sendVerificationCode", mailController.sendVerificationCode);

router.post("/verifyCode", mailController.verifyCode);

router.post("/registerMail", mailController.registeredAsSeller)

export default router;