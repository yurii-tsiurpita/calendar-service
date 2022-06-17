import express from 'express';
import * as eventController from '../controllers/eventController.js';

const eventRouter = express.Router();

eventRouter
    .route('/')
    .post(eventController.createEvent)
    .get(eventController.getEvents);

eventRouter
    .route('/:id')
    .put(eventController.updateEvent)
    .delete(eventController.deleteEvent);

export default eventRouter;