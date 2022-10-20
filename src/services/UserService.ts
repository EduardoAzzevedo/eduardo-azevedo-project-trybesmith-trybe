import UserModel from '../models/UserModel';
import connection from '../models/connection';
import { IUser } from '../interface/IUser';
import { IToken } from '../interface/IToken';
import generateToken from '../utils/JWT';

export default class UserService {
  userModel: UserModel;

  constructor() {
    this.userModel = new UserModel(connection);
  }

  async createUser(user: IUser): Promise<IToken> {
    const { username, classe, level } = user;
    await this.userModel.createUser(user);
    const token = generateToken({ username, classe, level });
    return { token };
  }

  async getAllUsersByNameAndPassword(login: IUser) {
    const user = await this.userModel.getAllUsersByNameAndPassword(login);
    console.log(user);    

    if (!user) {
      return null;
    }

    const token = generateToken(login as IUser);
    return { token };
  }
}