import express from 'express';
import 'express-async-errors';
import erroMiddleware from './middlewares/erro.middleware';
import productsRoute from './routes/Products.routes';
import usersRoute from './routes/User.routes';

const app = express();

app.use(express.json());

app.use('/products', productsRoute);
app.use('/users', usersRoute);

app.use(erroMiddleware);

export default app;
