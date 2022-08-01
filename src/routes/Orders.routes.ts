import { Router } from 'express';
import ordersController from '../controllers/orders.controller';

const route = Router();

route.get('/', ordersController.getAll);

export default route;
