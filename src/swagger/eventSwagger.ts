const createEventSwagger = {
    tags: ['event'],
    summary: 'Creates new event',
    operationId: 'createEvent',
    requestBody: {
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        description: {
                            description: 'Event description',
                            type: 'string'
                        },
                        date: {
                            description: 'Event date',
                            type: 'string'
                        },
                        repeat: {
                            description: 'Specifies whether the event should repeat and how often',
                            type: 'string'
                        },
                        userId: {
                            description: 'ID of user who belongs to this event',
                            type: 'string'
                        }
                    },
                    required: ['description', 'date', 'repeat', 'userId']
                },
                example: {
                    "description": "Watch a movie",
                    "date": "2022-09-18T21:00:00.000Z",
                    "repeat": "week",
                    "userId": 2,
                }
            }
        }
    },
    responses: {
        201: {
            description: 'Event created. Returns new event.',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        example: {
                            "id": 9,
                            "description": "Watch a movie",
                            "date": "2022-09-18T21:00:00.000Z",
                            "repeat": "week",
                            "userId": 2,
                            "updatedAt": "2022-06-17T05:52:13.648Z",
                            "createdAt": "2022-06-17T05:52:13.648Z"
                        }
                    }
                }
            }
        }
    }
};

const getEventsSwagger = {
    tags: ['event'],
    summary: 'Returns array of events. It is able to search in a certain time range',
    operationId: 'getEvents',
    parameters: [
        {
            name: 'from',
            in: 'query',
            description: 'Date from which to filter events.',
            required: false,
            schema: {
                type: 'string'
            },
            example: '2022-6-17'
        },
        {
            name: 'to',
            in: 'query',
            description: 'Date to which to filter events.',
            required: false,
            schema: {
                type: 'string'
            },
            example: '2023-6-17'
        }
    ],
    responses: {
        200: {
            description: 'Response with events.',
            content: {
                'application/json': {
                    schema: {
                        type: 'array',
                        example: [
                            {
                                "id": 4,
                                "description": "Help someone",
                                "date": "2024-09-09T21:00:00.000Z",
                                "repeat": "none",
                                "userId": 1,
                                "createdAt": "2022-06-16T19:57:57.133Z",
                                "updatedAt": "2022-06-16T19:57:57.133Z"
                            },
                            {
                                "id": 6,
                                "description": "Visit a doctor",
                                "date": "2022-09-14T21:00:00.000Z",
                                "repeat": "2 weeks",
                                "userId": 2,
                                "createdAt": "2022-06-16T21:26:37.875Z",
                                "updatedAt": "2022-06-16T21:26:37.875Z"
                            }
                        ]
                    }
                }
            }
        }
    }
};

const updateEventSwagger = {
    tags: ['event'],
    summary: 'Updates event',
    operationId: 'updateEvent',
    parameters: [
        {
            name: 'id',
            in: 'path',
            description: 'ID of event to update.',
            required: true,
            schema: {
                type: 'number'
            },
            example: 4
        }
    ],
    requestBody: {
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        description: {
                            description: 'Event description',
                            type: 'string'
                        },
                        date: {
                            description: 'Event date',
                            type: 'string'
                        },
                        repeat: {
                            description: 'Specifies whether the event should repeat and how often',
                            type: 'string'
                        }
                    },
                    required: ['description', 'date', 'repeat']
                },
                example: {
                    "description": "Watch a movie",
                    "date": "2022-09-18T21:00:00.000Z",
                    "repeat": "day"
                }
            }
        }
    },
    responses: {
        200: {
            description: 'Event updated. Returns updated event.',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        example: {
                            "id": 4,
                            "description": "Watch a movie",
                            "date": "2022-09-18T21:00:00.000Z",
                            "repeat": "day",
                            "userId": 1,
                            "createdAt": "2022-06-16T19:57:57.133Z",
                            "updatedAt": "2022-06-17T07:13:02.684Z"
                        }
                    }
                }
            }
        }
    }
};

const deleteEventSwagger = {
    tags: ['event'],
    summary: 'Deletes event',
    operationId: 'deleteEvent',
    parameters: [
        {
            name: 'id',
            in: 'path',
            description: 'ID of event to delete.',
            required: true,
            schema: {
                type: 'number'
            },
            example: 4
        }
    ],
    responses: {
        200: {
            description: 'Event deleted. Returns deleted event.',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        example: {
                            "id": 4,
                            "description": "Watch a movie",
                            "date": "2022-09-18T21:00:00.000Z",
                            "repeat": "day",
                            "userId": 1,
                            "createdAt": "2022-06-16T19:57:57.133Z",
                            "updatedAt": "2022-06-17T07:13:02.684Z"
                        }
                    }
                }
            }
        }
    }
};

export const eventSwagger = {
    '/api/events': {
        post: createEventSwagger,
        get: getEventsSwagger
    },
    '/api/events/{id}': {
        put: updateEventSwagger,
        delete: deleteEventSwagger
    }
};