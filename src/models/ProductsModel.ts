import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IProducts } from '../interface/IProducts';

export default class ProductsModel {
  connection: Pool;

  constructor(connectionDB: Pool) {
    this.connection = connectionDB;
  }

  async createProduct(product: IProducts) {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?,?)',
      [product.name, product.amount],
    );
    return { id: insertId, ...product };
  }

  async getAllProducts(): Promise<IProducts[]> {
    const [products] = await this.connection.execute(
      'SELECT * FROM Trybesmith.Products',
    );
    return products as IProducts[];
  }
}