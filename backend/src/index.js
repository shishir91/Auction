import express from "express";
import connection from "./models/index.js"
import userRoute from "./routes/userRoute.js"
import itemRoute from "./routes/itemRoute.js"
import adminRoute from "./routes/adminRoute.js"
import mailRoute from "./routes/mailRoute.js"
import cors from "cors"
import http from "http";
import { Server } from "socket.io";
import session from "express-session";

const app = express();
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true, 
    })
);
app.use(express.json());
app.use(express.static('public'));
app.use('/uploads', express.static('./public/uploads'));
app.use(express.urlencoded({ extended: false }));
app.use(
    session({
        secret: 'secret',
        resave: false,
        saveUninitialized: false
    })
);

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
})

io.on("connection", (socket) => {
    console.log("User Connected: " + socket.id);

    socket.on("join_room", (data)=>{
        socket.join(data);
        console.log(`User with ID ${data.userEmail} joined Room ${data}`);
    });

    socket.on("place_bid", (data)=>{
        socket.to(data.room).emit("receive_bidData", data);
        console.log(data);
    })

    socket.on("disconnect", () => {
        console.log("User Disconneted: " + socket.id);
    });
})

app.get("/", async (req, res) => {
    res.send("Server has started!!");
});

app.use("/", userRoute);
app.use("/item/", itemRoute);
app.use("/admin/", adminRoute);
app.use("/mail/", mailRoute);

server.listen(5000, async () => {
    console.log("Server has started!!!  http://localhost:5000");

    try {
        await connection.authenticate();
        connection.sync();
        console.log("Successfully connected to db");
    } catch (err) {
        console.log("Error while connecting to db", err);
    }
});


