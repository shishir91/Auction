import express from "express";
import connection from "./models/index.js"
import userRoute from "./routes/userRoute.js"
import itemRoute from "./routes/itemRoute.js"
import adminRoute from "./routes/adminRoute.js"
import mailRoute from "./routes/mailRoute.js"

import session from "express-session";

const app = express();
app.use(express.json());
app.use(express.static('public'));
// app.use('/css', express.static('./public/css'));
// app.use('/img', express.static('./public/img'));
// app.use('/js', express.static('./public/js'));
app.use('/uploads', express.static('./public/uploads'));
app.use(express.urlencoded({ extended: false }));
app.use(
    session({
        secret: 'secret',
        resave: false,
        saveUninitialized: false
    })
);

app.get("/", async (req, res) => {
    res.send("Server has started!!");
});

app.use("/", userRoute);
app.use("/item/", itemRoute);
app.use("/admin/", adminRoute);
app.use("/mail/", mailRoute);

app.listen(5000, async () => {
    console.log("Server has started!!!  http://localhost:5000");

    try {
        await connection.authenticate();
        connection.sync();
        console.log("Successfully connected to db");
    } catch (err) {
        console.log("Error while connecting to db", err);
    }
});


