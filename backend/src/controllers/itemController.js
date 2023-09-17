import itemModel from "../models/itemModel.js";
import { Op } from "sequelize";

export default class ItemController {
    async addItem(req, res) {
        const { name, artist, description, category, productDetail, mediumUsed, materialUsed, dimension, auctionDate, auctionTime, auctionDuration, basePrice } = req.body;
        let { uploadedBy } = req.body;

        function generateRandomNumber() {
            const min = 10000000;
            const max = 99999999; 
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        if (!req.session.user_email) {
            uploadedBy = "testData";
        } else {
            uploadedBy = req.session.user_email;
        }

        if (!name || !artist || !description || !category || !productDetail || !auctionDate || !auctionTime || !auctionDuration || !basePrice) {
            return res.json({ success: "false", message: "All fields are required" })
        }
        else {

            const data = await itemModel.create({ ...req.body, lotNumber: generateRandomNumber(), image: req.file.filename, status: "listed", uploadedBy });
            if (data) {
                return res.json({ success: true, message: "Item added successfully" });
            } else {
                return res.json({ success: false, message: "Error while adding item" });
            }
        }
    }

    async getAllItems(req, res) {
        let { limit } = req.query;
        if (!limit) limit = 20;
        const data = await itemModel.findAll({
            limit: parseInt(limit),
            raw: true
        });
        for (let d of data) {
            d.image = "http://localhost:5000/uploads/" + d.image
            console.log(d.image);
        }
        res.json(data);
    }

    async getItemsByCategory(req, res) {
        let { c } = req.query;
        const data = await itemModel.findAll({
            where:{
                category: c
            },
            raw: true
        });
        for (let d of data) {
            d.image = "http://localhost:5000/uploads/" + d.image
            console.log(d.image);
        }
        res.json(data);
    }

    async getItemByID(req, res) {
        const { id } = req.params;
        if (id) {
            const data = await itemModel.findByPk({ id, raw: true });
            for (let d of data) {
                d.image = "http://localhost:5000/uploads/" + d.image
                console.log(d.image);
            }
            data ? res.json(data) : res.json({ message: "No data found" });
        } else {
            res.json({ success: false, message: "Item ID not provided" });
        }
    }

    async searchItem(req, res) {
        const { q } = req.query;
        if (q) {
            const data = await itemModel.findAll({
                where: {
                    [Op.or]: {
                        name: {
                            [Op.like]: `%${q}%`
                        },
                        artist: {
                            [Op.like]: `%${q}%`
                        }
                    }
                },
                raw: true
            });
            if (data.length > 0) {
                console.log(data);
                for (let d of data) {
                    d.image = "http://localhost:5000/uploads/" + d.image
                    console.log(d.image);
                }
                res.json(data);
            } else {
                res.json("No Data Found")
                console.log("No Data Found");
            }
        }
        else {
            res.json({ success: false, message: "Empty Search String" })
        }
    }
}