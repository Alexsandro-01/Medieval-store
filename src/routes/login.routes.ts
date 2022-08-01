import { Router } from 'express';
import loginController from '../controllers/users.controller';

const route = Router();

route.post('/', loginController.login);

export default route;