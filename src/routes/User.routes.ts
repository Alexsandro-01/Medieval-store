import { Router } from 'express';
import usersController from '../controllers/users.controller';

const route = Router();
route.post('/', usersController.create);

export default route;
