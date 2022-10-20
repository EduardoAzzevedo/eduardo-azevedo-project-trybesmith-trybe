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
}