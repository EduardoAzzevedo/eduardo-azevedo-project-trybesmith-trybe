import { Request, Response } from 'express';
import UserService from '../services/UserService';

export default class UserController {
  userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  createUser = async (req: Request, res: Response) => {
    const { body } = req;
    const token = await this.userService.createUser(body);
    return res.status(201).json(token);
  };

  getAllUsersByNameAndPassword = async (req: Request, res: Response) => {
    const { body } = req;
    const token = await this.userService.getAllUsersByNameAndPassword(body);

    if (!token) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }

    return res.status(200).json(token);
  };
}