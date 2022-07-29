import express from 'express';
import 'express-async-errors';
import erroMiddleware from './middlewares/erro.middleware';
import productsRoute from './routes/Products.routes';

const app = express();

app.use(express.json());

app.use('/products', productsRoute);

app.use(erroMiddleware);

export default app;
