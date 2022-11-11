import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IOrder } from '../interface/IOrder';

export default class OrderModel {
  connection: Pool;

  constructor(connectionBD: Pool) {
    this.connection = connectionBD;
  }

  async getAllOrders(): Promise<IOrder []> {
    const [orders] = await this.connection.execute(
      `SELECT o.id as "id", o.userId, JSON_ARRAYAGG(pd.id) as "productsIds"
      FROM Trybesmith.Orders AS o
      INNER JOIN Trybesmith.Products AS pd on pd.orderId = o.id
      GROUP BY o.id;`,
    );

    return orders as IOrder[];
  }

  async createOrders(id: number): Promise<number> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders (userId) VALUES (?);',
      [id],
    );

    return insertId;
  }
}