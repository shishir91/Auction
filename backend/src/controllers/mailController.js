import userModel from "../models/userModel.js";
import nodemailer from "nodemailer";

export default class MailController{
    async sendVerificationCode(req, res) {
        const {email} = req.body
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
                user: "22e86f837e6066",
                pass: "0d808d78a12a26"
            }
        });
        const code = generateVerificationCode();

        console.log("This code is generated: " + code)
    
        const mailOptions = {
            from: 'nodeapp@nodejs',
            to: email,
            subject: 'Email Verification',
            html: `<p>Dear user,</p><p>Your Verification Code is:   ${code} </p>`
        };
        transport.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                req.session.sentcode = code;
                console.log('Email sent: ' + info.response + req.session.sentcode);
                res.json({ success: true, message: "Email sent Successfully" });
            }
        });
    };

    async verifyCode(req, res) {
        const { code } = req.body;
        const sentCode = req.session.sentcode;
        const email = req.session.user_email;
        const temail = email.trim();
        // console.log(email);
        // console.log(temail);
        // console.log(code);
        // console.log(sentCode);
    
        if (!code) {
            res.json({ success: false, message: "Enter Verification Code" });
        } else if (code == sentCode) {
            const data = await userModel.update({
                verified: true
            }, {
                where: {
                    email: temail
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
}