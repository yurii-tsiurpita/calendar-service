import "reflect-metadata";
import express from 'express';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import swaggerDocumentation from './swagger/swaggerDocumentation.js';
import userRouter from './routes/userRouter.js';
import eventRouter from './routes/eventRouter.js';
import dbConnection from './db.js';

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => res.send('Calendar service'));
app.use('/api/events', eventRouter);
app.use('/api/users', userRouter);
app.use('/swagger-doc', swaggerUi.serve, swaggerUi.setup(swaggerDocumentation));

const start = async () => {
    try {
        await dbConnection.sync();
        console.log('All models were synchronized successfully');
        app.listen(process.env.PORT, () => {
            console.log(`Server is running at http://localhost:${process.env.PORT}`);
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

start();

export default app;