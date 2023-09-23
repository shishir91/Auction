import { Router } from "express";
import BiddingController from "../controllers/biddingController.js";

const router = Router();
const biddingController = new BiddingController();

router.post("/", biddingController.bidding);

router.get("/getHighestBid/:itemid", biddingController.getHighestBid);

router.delete("/deleteBids/:item", biddingController.deleteBids);

export default router;