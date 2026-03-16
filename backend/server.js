import express from "express";
import dotenv from "dotenv";
import AuthController from "./controllers/AuthController.js";
import OrderController from "./controllers/OrderController.js";
import connectDB from "./controllers/dbController.js";
import sendMail from "./controllers/MailController.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3000;
app.use(cors());

// Serve static files from uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//mongo connection
connectDB();
//auth controller

app.use("/api/auth", AuthController);

//controller for orders
app.use("/api/orders", OrderController);

app.get("/", (req, res) => {
  res.send("Hello World!");
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});