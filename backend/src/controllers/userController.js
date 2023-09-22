import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import validator from "validator";

export default class UserController {

    async signup(req, res) {
        const { name, email, phone, password, cpassword } = req.body;
        console.log(req.body)
        const existingEmail = await userModel.findOne({ where: { email } });
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const digitRegex = /[0-9]/;
        const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

        if (!name || !email || !phone || !password || !cpassword) {
            return res.json({ success: false, message: "All fields are required" });
        }

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Invalid email address" });
        } else if (existingEmail) {
            console.log(existingEmail);
            return res.status(400).json({ success: false, message: 'Email already used' });
        } else if (password.length < 8) {
            return res.status(400).json({ success: false, message: 'Password must me atleast 8 characters long.' });
        } else if (!uppercaseRegex.test(password)) {
            return res.status(400).json({ success: false, message: 'Password must contain at least one uppercase letter.' });
        } else if (!lowercaseRegex.test(password)) {
            return res.status(400).json({ success: false, message: 'Password must contain at least one lowercase letter.' });
        } else if (!digitRegex.test(password)) {
            return res.status(400).json({ success: false, message: 'Password must contain at least one numeric digit.' });
        } else if (!specialCharRegex.test(password)) {
            return res.status(400).json({ success: false, message: 'Password must contain at least one special character.' });
        } else {

            if (password === cpassword) {

                async function hashPassword(password) {
                    const saltRounds = 10;
                    const hashedPassword = await bcrypt.hash(password, saltRounds);
                    return hashedPassword;
                }

                const hashedPassword = await hashPassword(password);

                const data = await userModel.create({
                    fullname: name,
                    email: email,
                    phone: phone,
                    password: hashedPassword,
                    type: "user",
                    status: "active",
                    verified: false
                });
                if (data) {
                    req.session.user_email = data.email;
                    return res.json({ success: true, message: "Registration successfully", email: data.email });
                } else {
                    return res.json({ success: false, message: "Error while adding user" });
                }
            } else {
                return res.json({ success: false, message: "Password didn't match" });
            }

        }
    }

    async login(req, res) {

        const { email, password } = req.body;
        console.log(req.body)
        if (!email || !password) {
            return res.json({ success: false, message: "All fields are required" });
        }

        const user = await userModel.findOne({ where: { email } });
        console.log(user)

        if (!user) {
            return res.json({ success: false, message: "Invalid Email Address" });
            console.log('Invalid Email Address');
        } else if (await bcrypt.compare(password, user.password)) {
            req.session.user_id = user.id;
            req.session.user_name = user.fullname;
            req.session.user_email = user.email;
            req.session.user_type = user.type;
            req.session.user_status = user.status;
            console.log(req.session)
            return res.json({ success: true, message: "Login successful", user_phone: user.phone, user_id: user.id, user_name: user.fullname, user_email: user.email, user_type: user.type, user_status: user.status });
            console.log('Login successful');
        } else {
            return res.json({ success: false, message: "Incorrect password" });
            console.log('Incorrect password');
        }
    }

    async logout(req, res) {
        console.log(req.session)
        req.session.destroy((err) => {
            if (err) {
                console.log('Error destroying session:', err);
            }
            res.json({ success: true, message: "Logout Successful" });
        });
    };

    async checkEmailID(req, res) {
        const { email } = req.body;
        if (!email) {
            res.json({ success: false, message: "Enter Email Address" });
        } else {
            const data = await userModel.findOne({ where: { email } });
            if (!data) {
                res.json({ success: false, message: "User Doesn't Exist With This Email Address" });
            } else {
                req.session.user_email = email;
                res.json({ success: true, message: "User Exist" });
            }
        }
    };

    async newPassword(req, res) {
        const { email, password, confirm_password } = req.body;
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const digitRegex = /[0-9]/;
        const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

        if (!password || !confirm_password) {
            return res.json({ success: false, message: "All fields are required" });
        }

        if (password.length < 8) {
            return res.status(400).json({ success: false, message: 'Password must me atleast 8 characters long.' });
        } else if (!uppercaseRegex.test(password)) {
            return res.status(400).json({ success: false, message: 'Password must contain at least one uppercase letter.' });
        } else if (!lowercaseRegex.test(password)) {
            return res.status(400).json({ success: false, message: 'Password must contain at least one lowercase letter.' });
        } else if (!digitRegex.test(password)) {
            return res.status(400).json({ success: false, message: 'Password must contain at least one numeric digit.' });
        } else if (!specialCharRegex.test(password)) {
            return res.status(400).json({ success: false, message: 'Password must contain at least one special character.' });
        } else {

            if (password === confirm_password) {

                async function hashPassword(password) {
                    const saltRounds = 10;
                    const hashedPassword = await bcrypt.hash(password, saltRounds);
                    return hashedPassword;
                }

                const hashedPassword = await hashPassword(password);

                const data = await userModel.update({
                    password: hashedPassword
                }, {
                    where: {
                        email
                    }
                });
                if (data) {
                    return res.json({ success: true, message: "Password reset successful!" });
                } else {
                    return res.json({ success: false, message: "Error while reseting password" });
                }
            } else {
                return res.json({ success: false, message: "Password didn't match" });
            }

        }
    };

    async uploadIdentity(req, res) {
        if (!req.file) {
            console.log("File Empty");
            res.json({ success: false, message: "Upload your Identity" })
        } else {
            console.log(req.file);
            const data = await userModel.update({
                identity: req.file.filename
            }, {
                where: {
                    id: req.session.user_id
                }
            });
            if (data) {
                res.json({ success: true, message: "Identity Uploaded" })
            } else {
                res.json({ success: false, message: "Cannot Upload Identity" })
            }
        }
    }


}