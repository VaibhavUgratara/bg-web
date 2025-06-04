import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import registerRoute from "./routes/register.route";
import loginRoute from "./routes/login.route";
import logoutRoute from "./routes/logout.route";
import cookieParser from "cookie-parser";
import dbConnect from "./utils/connection";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/register", registerRoute);
app.use("/api/login", loginRoute);
app.use("api/logout", logoutRoute);
app.use("api/posts", postsRoute);

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Welcome to the API");
});

dbConnect(process.env.MONGO_URI as string);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
