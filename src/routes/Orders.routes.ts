import { Router } from 'express';
import tokenMiddleware from '../middlewares/token.middleware';
import ordersController from '../controllers/orders.controller';

const route = Router();

route.get('/orders', ordersController.getAll);
route.post('/orders', tokenMiddleware, ordersController.create);

export default route;
