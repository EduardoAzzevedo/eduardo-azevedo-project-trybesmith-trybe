import { Request, Response } from 'express';
import OrderService from '../services/OrderService';

export default class OrderController {
  orderService: OrderService;

  constructor() {
    this.orderService = new OrderService();
  }

  getAllOrders = async (_req: Request, res: Response) => {
    const orders = await this.orderService.getAllOrders();
    
    return res.status(200).json(orders);
  };
}