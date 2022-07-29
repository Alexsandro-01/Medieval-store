import { Router } from 'express';
import products from '../controllers/products.controller';

const route = Router();

route.post('/', products.insert);

export default route;