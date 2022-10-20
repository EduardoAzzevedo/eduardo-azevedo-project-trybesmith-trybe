import { Request, Response } from 'express';
import ProductService from '../services/ProductService';

export default class ProductController {
  productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  createProduct = async (req: Request, res: Response) => {
    const { body } = req;
    const newProduct = await this.productService.createProduct(body);
    return res.status(201).json(newProduct);
  };

  getAllProducts = async (_req: Request, res: Response) => {
    const products = await this.productService.getAllProducts();
    return res.status(200).json(products);
  };
}