import { NextFunction, Request, Response } from 'express';
import userSchema from '../utils/loginSchema';

const userLogin = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  const { error } = userSchema.validate(body);

  if (error && error.message.includes('required')) {
    return res.status(400).json({ message: error.message });
  }

  if (error) {
    return res.status(422).json({ message: error.message });
  }

  next();
};

export default userLogin;