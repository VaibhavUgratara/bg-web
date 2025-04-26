import express from 'express';
import Contact from '../models/Contact';

const contactRoute = express.Router();

contactRoute.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();

    res.status(201).json({ message: 'Contact message saved successfully' });
  } catch (err) {
    console.error('Error saving contact:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default contactRoute;
