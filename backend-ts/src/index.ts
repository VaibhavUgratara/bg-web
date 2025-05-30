import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoute from "./routes/contact";
import registerRoute from "./routes/register";
import loginRoute from "./routes/login";
import dbConnect from "./utils/connection";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", contactRoute);
app.use("/api", registerRoute);
app.use("/api", loginRoute);

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Welcome to the API");
});

dbConnect(process.env.MONGO_URI as string);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
