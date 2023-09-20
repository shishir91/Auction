import express from "express";
import cors from "cors"; 
import connection from "./models/index.js"
import userRoute from "./routes/userRoute.js"
import itemRoute from "./routes/itemRoute.js"
import adminRoute from "./routes/adminRoute.js"
import mailRoute from "./routes/mailRoute.js"
import http from "http";
import { Server } from "socket.io";
import session from "express-session";

const app = express();
app.use(cors());
app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true, // Allow cookies and headers with credentials
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
    cors:{
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
})

io.on("connection", (socket)=>{
    console.log("User Connected: "+ socket.id);

    socket.on("disconnect", ()=>{
        console.log("User Disconneted: "+ socket.id);
    })
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


