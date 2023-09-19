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

//localhost:3000/item/delete/12
router.delete("/delete/:id", itemController.deleteItem);

//localhost:3000/item/add
router.post("/add", imageUpload, itemController.addItem);

//localhost:3000/item/
router.get("/", itemController.getAllItems);

//localhost:3000/item/category?c="painting"
router.get("/category", itemController.getItemsByCategory);

//localhost:3000/item/12
router.get("/:id", itemController.getItemByID);

router.get("/search/all", itemController.searchItem);

export default router;