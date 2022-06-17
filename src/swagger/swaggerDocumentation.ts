import { userSwagger } from './userSwagger.js';
import { eventSwagger } from './eventSwagger.js';

const swaggerDocumentation = {
    openapi: '3.0.0',
    info: {
        title: 'Calendar Service',
        description: 'This is a simple calendar service for a test project.',
        version: '0.0.1'
    },
    servers: [
        {
            url: 'http://localhost:2022',
            description: "Local development server"
        }
    ],
    tags: [
        {
            name: 'user',
            description: 'User routes'
        },
        {
            name: 'event',
            description: 'Event routes'
        }
    ],
    paths: {
        ...userSwagger,
        ...eventSwagger
    }
};

export default swaggerDocumentation;