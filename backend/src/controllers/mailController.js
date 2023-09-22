import userModel from "../models/userModel.js";
import nodemailer from "nodemailer";
import "dotenv/config";

function generateVerificationCode() {
    const length = 6;
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let verificationCode = "";
    for (let i = 0; i < length; i++) {
        verificationCode += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return verificationCode;
}

var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: process.env.MT_USER,
        pass: process.env.MT_PASS
    }
});

export default class MailController {
    
    async sendVerificationCode(req, res) {
        const { email } = req.body
        const generatedCode = generateVerificationCode(); // Changed variable name to 'generatedCode'

        console.log("This code is generated: " + generatedCode); // Changed variable name to 'generatedCode'

        const mailOptions = {
            from: 'nodeapp@nodejs',
            to: email,
            subject: 'Email Verification',
            html: `<p>Dear user,</p><p>Your Verification Code is:   ${generatedCode} </p>` // Changed variable name to 'generatedCode'
        };
        transport.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                req.session.sentcode = generatedCode; // Changed variable name to 'generatedCode'
                console.log('Email sent: ' + info.response + req.session.sentcode);
                res.json({ success: true, message: "Email sent Successfully", generatedCode: generatedCode});
            }
        });
    };

    async verifyCode(req, res) {
        const {sentCode} = req.body;
        const { code } = req.body;
        const { email } = req.body;
        console.log(email)
        console.log(code)
        console.log(sentCode)

        if (!code) {
            res.json({ success: false, message: "Enter Verification Code" });
        } else if (code === sentCode) {
            const data = await userModel.update({
                verified: true
            }, {
                where: {
                    email: email
                }
            });
            console.log(data[0]);
            if (data) {
                req.session.destroy;
                req.session.userVerified = true;
                res.json({ success: true, message: "Email Verified" })
            }
        } else {
            res.json({ success: false, message: "Invalid Verification Code" })
        }
    }

    async registeredAsSeller(req, res) {
        const { email } = req.body

        const mailOptions = {
            from: 'nodeapp@nodejs',
            to: email,
            subject: 'Email Verification',
            html: `<p>Dear user,</p><p>Your account has been registered as a Seller</p>
                    <p>You can now upload your own Auctions.</p>
                    <p>Thank You!.</p>
                    <a href="http://localhost:3000/"><button>Click Me</button></a>`,
                    
        };
        
        transport.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
                res.json({ success: true, message: "Email sent Successfully"});
            }
        });
    }
}
