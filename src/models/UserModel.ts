import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { IUser } from '../interface/IUser';
import { ILogin } from '../interface/ILogin';

export default class UserModel {
  connection: Pool;

  constructor(connectionDB: Pool) {
    this.connection = connectionDB;
  }

  async createUser(user: IUser) {
    const { username, classe, level, password } = user;
    await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?,?,?,?)',
      [username, classe, level, password],
    );
  }

  async getAllUsersByNameAndPassword(login: ILogin) {
    const { username, password } = login;
    const [[user]] = await this.connection.execute<RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?',
      [username, password],
    );
    return user;
  }
}