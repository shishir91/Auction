import { Router } from "express";
import UserController from "../controllers/userController.js";
import multer from "multer";
import path from "path";

const router = Router();
const userController = new UserController();

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
});
var upload = multer({ storage: storage });
var imageUpload = upload.single('identity');

router.post("/checkEmailId", userController.checkEmailID);

router.post("/newPassword", userController.newPassword);

router.post("/signup", userController.signup);

router.post("/login", userController.login);

router.get("/logout", userController.logout);

router.post("/uploadIdentity", imageUpload, userController.uploadIdentity);

router.get("/highestBidderDetail/:id", userController.highestBidderDetail);

export default router;