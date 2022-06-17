import { Request, Response } from 'express';
import User from '../models/userModel.js';
import Event from '../models/eventModel.js';

export const createUser = (async (req: Request, res: Response) => {
    try {
        const user: User = await User.create(req.body);

        res.status(201).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
});

export const getUsers = (async (req: Request, res: Response) => {
    try {
        const users: User[] = await User.findAll({include: [Event]});

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
});