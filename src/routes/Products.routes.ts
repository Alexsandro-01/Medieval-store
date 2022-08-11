import { Router } from 'express';
import products from '../controllers/products.controller';

const route = Router();

route.post('/products', products.insert);
route.get('/products', products.getAll);

export default route;