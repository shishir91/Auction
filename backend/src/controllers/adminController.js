import userModel from "../models/userModel.js";

export default class AdminController {
    async userList(req, res) {
        const data = await userModel.findAll({ raw: true });
        if (data) {
            for (let d of data) {
                d.identity = "http://localhost:5000/uploads/" + d.identity
                console.log(d.identity);
            }
            res.json(data);
        } else {
            res.json({ success: false, message: "There are no users" })
        }
    };

    async changeUsertoSeller(req, res) {
        const { id } = req.query;
        if (!id) {
            res.json({ success: false, message: "No user selected" });
        } else {
            const data = await userModel.update({
                type: "seller"
            }, {
                where: {
                    id
                }
            });
            if (data) {
                res.json({ success: true, message: "User is now Seller" });
            } else {
                res.json({ success: false, message: "Cannot change the user" });
            }
        }
    }

    async deleteUser(req, res) {
        const { id } = req.query
        const data = await userModel.destroy({
            where: {
                id
            }
        });
        if (data) {
            res.json({ success: true, message: "User Deleted" })
        }else{
            res.json({success: false, message: "Unable to Delete User"})
        }
    }

    async blockUser(req, res) {
        const { id } = req.query
        const data = await userModel.update({
            status: "blocked"
        }, {
            where: {
                id
            }
        });
        if(data){
            res.json({success: true, message: "User Blocked"})
        }else{
            res.json({success: false, message: "Unable to Block User"})
        }
    }
}