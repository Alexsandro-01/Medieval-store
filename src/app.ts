import express from 'express';
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from '../swagger_output.json';
import erroMiddleware from './middlewares/erro.middleware';
import productsRoute from './routes/Products.routes';
import usersRoute from './routes/User.routes';
import orderRoute from './routes/Orders.routes';
import loginRoute from './routes/login.routes';

const app = express();

app.use(express.json());

app.use('/', productsRoute);
app.use('/', usersRoute);
app.use('/', orderRoute);
app.use('/', loginRoute);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(erroMiddleware);

export default app;
