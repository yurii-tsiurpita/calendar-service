import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
import User from './models/userModel.js';
import Event from './models/eventModel.js';

dotenv.config();

const dbConnection = new Sequelize({
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    },
    host: process.env.DB_HOST!,
    username: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_DATABASE!,
    logging: false,
    models: [Event, User]
});

export default dbConnection;