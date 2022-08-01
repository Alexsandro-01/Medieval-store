import express from 'express';
import 'express-async-errors';
import erroMiddleware from './middlewares/erro.middleware';
import productsRoute from './routes/Products.routes';
import usersRoute from './routes/User.routes';
import orderRoute from './routes/Orders.routes';
import loginRoute from './routes/login.routes';

const app = express();

app.use(express.json());

app.use('/products', productsRoute);
app.use('/users', usersRoute);
app.use('/orders', orderRoute);
app.use('/login', loginRoute);

app.use(erroMiddleware);

export default app;
