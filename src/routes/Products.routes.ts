import { Router } from 'express';
import products from '../controllers/products.controller';

const route = Router();

route.post('/', products.insert);
route.get('/', products.getAll);

export default route;