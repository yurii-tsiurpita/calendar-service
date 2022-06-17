import { Request, Response } from 'express';
import Event from '../models/eventModel.js';
import filterObject from '../utils/filterObject.js';
import { Op } from 'sequelize';

export const createEvent = (async (req: Request, res: Response) => {
    try {
        const event: Event = await Event.create({
            ...req.body,
            date: new Date(req.body.date).toDateString()
        });
    
        res.status(201).json(event);
    } catch (error) {
        res.status(500).json(error);
    }
});

export const getEvents = (async (req: Request, res: Response) => {
    try {
        let filter;
        if (req.query.from && !req.query.to) {
            filter = {
                where: {
                    date: {
                        [Op.gte]: new Date(req.query.from as string).toDateString()
                    }
                }
            };
        }
    
        if (!req.query.from && req.query.to) {
            filter = {
                where: {
                    date: {
                        [Op.lte]: new Date(req.query.to as string).toDateString()
                    }
                }
            };
        }
    
        if (req.query.from && req.query.to) {
            filter = {
                where: {
                    date: {
                        [Op.between]: [new Date(req.query.from as string).toDateString(), new Date(req.query.to as string).toDateString()]
                    }
                }
            };
        }
    
        const events: Event[] = await Event.findAll(filter);
    
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json(error);
    }
});

export const updateEvent = (async (req: Request, res: Response) => {
    try {
        let nonUpdatableFields = ['id', 'userId', 'createdAt', 'updatedAt'];
        const validBody = filterObject(req.body, nonUpdatableFields) as Event;
    
        await Event.update(validBody, {where: {id: req.params.id}});
        const updatedEvent: Event | null = await Event.findByPk(req.params.id);
    
        res.status(200).json(updatedEvent);
    } catch (error) {
        res.status(500).json(error);
    }
});

export const deleteEvent = (async (req: Request, res: Response) => {
    try {
        const deletedEvent: Event | null = await Event.findByPk(req.params.id);
        await Event.destroy({where: {id: req.params.id}});
    
        res.status(200).json(deletedEvent);
    } catch (error) {
        res.status(500).json(error);
    }
});