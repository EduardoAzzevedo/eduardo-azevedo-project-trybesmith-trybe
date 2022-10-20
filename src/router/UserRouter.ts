import { Router } from 'express';
import UserController from '../controllers/UserController';
import userLogin from '../middleware/userLoginMiddleware';

const user = Router();

const userController = new UserController();

user.post('/', userLogin, userController.createUser);

export default user;