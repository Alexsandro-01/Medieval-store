import { Router } from 'express';
import loginController from '../controllers/users.controller';

const route = Router();

route.post('/login', loginController.login);

export default route;