import express from 'express';
import User from '../models/Register';

const registerRoute = express.Router();

registerRoute.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({ message: 'User Registered Successfully' });
  } catch (err) {
    console.error('Error! Registering', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default registerRoute;
