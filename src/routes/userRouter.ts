import express from 'express';
import * as userController from '../controllers/userController.js';

const userRouter = express.Router();

userRouter
    .route('/')
    .post(userController.createUser)
    .get(userController.getUsers);

export default userRouter;