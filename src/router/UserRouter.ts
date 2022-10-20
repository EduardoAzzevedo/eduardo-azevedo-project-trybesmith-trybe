import { Router } from 'express';
import UserController from '../controllers/UserController';

const user = Router();

const userController = new UserController();

user.post('/', userController.createUser);

export default user;