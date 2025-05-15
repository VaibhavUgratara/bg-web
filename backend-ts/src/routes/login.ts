import express from 'express';
import OnlineUser from '../models/Login';
import { checkCredential } from '../utils/validateLogin';

const loginRoute = express.Router();
loginRoute.post('/', async (req, res) => {
    
    try {
        const { email, password } = req.body;
        const error = await checkCredential(email, password);

        if(error) {
            res.status(400).json( {error} );
            return;
        }

        if(await OnlineUser.findOne({ email })) {
            res.status(200).json({message: "You are already Logged In"});
            return;
        }

        const newUser = new OnlineUser( {email} );
        await newUser.save();
        res.status(201).json({message: "User Logged In Successfully"});

    } catch(err) {
        console.error('Error! Logging In', err);
        res.status(500).json({error: 'Internal Server Error'});
    }

});

export default loginRoute;
