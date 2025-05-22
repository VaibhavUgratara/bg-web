import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import contactRoute from './routes/contact';
import registerRoute from './routes/register';
import loginRoute from './routes/login';
import { Request, Response } from 'express';

dotenv.config(); // Loads .env values into process.env

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/contact', contactRoute);
app.use('/register', registerRoute);
app.use('/login', loginRoute);

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the API');
}); // ✅ Fixed

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error('❌ MongoDB connection error:', err));

