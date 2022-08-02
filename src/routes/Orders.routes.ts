import { Router } from 'express';
import tokenMiddleware from '../middlewares/token.middleware';
import ordersController from '../controllers/orders.controller';

const route = Router();

route.get('/', ordersController.getAll);
route.post('/', tokenMiddleware, ordersController.create);

export default route;
