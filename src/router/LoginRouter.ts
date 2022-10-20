import { Router } from 'express';
import UserController from '../controllers/UserController';
import loginMiddleware from '../middleware/loginMiddleware';

const loginRouter = Router();

const userController = new UserController();

loginRouter.post('/', loginMiddleware, userController.getAllUsersByNameAndPassword);

export default loginRouter;