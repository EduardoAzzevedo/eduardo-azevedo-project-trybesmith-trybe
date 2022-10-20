import { Router } from 'express';
import ProductController from '../controllers/ProductController';

const products = Router();

const productController = new ProductController();

products.post('/', productController.createProduct);
products.get('/', productController.getAllProducts);

export default products;