import { Router } from 'express';
import OrderController from '../controllers/OrderController';

const order = Router();

const orderController = new OrderController();

order.get('/', orderController.getAllOrders);

export default order;