import { Router } from 'express';
import ProductController from '../controllers/ProductController';
import productValidate from '../middleware/productMiddleware';

const products = Router();

const productController = new ProductController();

products.post('/', productValidate, productController.createProduct);
products.get('/', productController.getAllProducts);

export default products;