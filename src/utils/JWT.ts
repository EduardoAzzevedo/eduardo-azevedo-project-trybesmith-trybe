import jwt, { Secret } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { IUser } from '../interface/IUser';

dotenv.config();

const generateToken = (user: Omit<IUser, 'password'>) => jwt
  .sign(user, process.env.JWT_SECRET as Secret);

export default generateToken;