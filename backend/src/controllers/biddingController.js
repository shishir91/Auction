import bidModel from "../models/bidModel.js";

export default class BiddingController {
    async bidding(req, res) {
        const { itemID, userID, bid } = req.body;
        const data = await bidModel.create({
            item: itemID,
            user: userID,
            bid
        });
        if (data) {
            res.json({ success: true, message: "Bid Stored In Database" })
        }
    }

    async getHighestBid(req, res) {
        const { itemID } = req.body;
        const data = await bidModel.findAll({
            where: {
                item: itemID
            },
            order: [['bid', 'DESC']], // Order by bidValue in descending order
        })
            .then((highestBid) => {
                if (highestBid) {
                    // highestBid contains the bid with the highest value for the specified item
                    console.log('Highest Bid:', highestBid);
                } else {
                    console.log('No bids found for the specified item.');
                }
                res.json(highestBid[0])
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}