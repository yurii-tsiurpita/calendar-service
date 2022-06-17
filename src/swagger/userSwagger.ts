const createUserSwagger = {
    tags: ['user'],
    summary: 'Creates new user',
    operationId: 'createUser',
    requestBody: {
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        name: {
                            description: 'User name',
                            type: 'string'
                        },
                        email: {
                            description: 'User email',
                            type: 'string'
                        }
                    },
                    required: ['name', 'email']
                },
                example: {
                    "name": "Alex",
                    "email": "alex@gmail.com",
                }
            }
        }
    },
    responses: {
        201: {
            description: 'User created. Returns new user.',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        example: {
                            "id": 1,
                            "name": "Alex",
                            "email": "alex@gmail.com",
                            "createdAt": "2022-06-16T19:43:24.538Z",
                            "updatedAt": "2022-06-16T19:43:24.538Z"
                        }
                    }
                }
            }
        }
    }
};

const getUsersSwagger = {
    tags: ['user'],
    summary: 'Returns array of users',
    operationId: 'getUsers',
    responses: {
        200: {
            description: 'Response with users.',
            content: {
                'application/json': {
                    schema: {
                        type: 'array',
                        example: [
                            {
                                "id": 1,
                                "name": "Alex",
                                "email": "alex@gmail.com",
                                "createdAt": "2022-06-16T19:43:24.538Z",
                                "updatedAt": "2022-06-16T19:43:24.538Z",
                                "events": [
                                    {
                                        "id": 4,
                                        "description": "Help someone",
                                        "date": "2024-09-09T21:00:00.000Z",
                                        "repeat": "none",
                                        "userId": 1,
                                        "createdAt": "2022-06-16T19:57:57.133Z",
                                        "updatedAt": "2022-06-16T19:57:57.133Z"
                                    }
                                ]
                            },
                            {
                                "id": 2,
                                "name": "Mark",
                                "email": "mark@gmail.com",
                                "createdAt": "2022-06-16T21:25:10.161Z",
                                "updatedAt": "2022-06-16T21:25:10.161Z",
                                "events": [
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
                        ]
                    }
                }
            }
        }
    }
};

export const userSwagger = {
    '/api/users': {
        post: createUserSwagger,
        get: getUsersSwagger
    }
};