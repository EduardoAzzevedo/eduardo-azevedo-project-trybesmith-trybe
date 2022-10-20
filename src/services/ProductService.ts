import { IProducts } from '../interface/IProducts';
import connection from '../models/connection';
import ProductsModel from '../models/ProductsModel';

export default class ProductService {
  productModel: ProductsModel;

  constructor() {
    this.productModel = new ProductsModel(connection);
  }

  async createProduct(product: IProducts) {
    const newProduct = await this.productModel.createProduct(product);
    return newProduct;
  }

  async getAllProducts() {
    const products = await this.productModel.getAllProducts();
    return products;
  }
}