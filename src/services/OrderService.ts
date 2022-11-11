import { IOrder } from '../interface/IOrder';
import connection from '../models/connection';
import OrderModel from '../models/OrderModel';

export default class OrderService {
  orderModel: OrderModel;

  constructor() {
    this.orderModel = new OrderModel(connection);
  }

  async getAllOrders(): Promise<IOrder[]> {
    const orders = await this.orderModel.getAllOrders();
    return orders;
  }

  async createOrders(id: number): Promise<number> {
    const createdId = await this.orderModel.createOrders(id);

    return createdId;
  }
}