import { Router } from "express";
import ItemController from "../controllers/itemController.js";
import multer from "multer";
import path from "path";

const router = Router();
const itemController = new ItemController;

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
});
var upload = multer({ storage: storage });
var imageUpload = upload.single('image');

router.delete("/delete/:id", itemController.deleteItem);

router.post("/add", imageUpload, itemController.addItem);

router.get("/", itemController.getAllItems);

router.get("/category", itemController.getItemsByCategory);

router.get("/:id", itemController.getItemByID);

router.get("/search/all", itemController.searchItem);

export default router;