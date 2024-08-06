const ProductService = require("../services/ProductService");

class ProductController {
  constructor() {
    this.productService = new ProductService();
  }

  createProduct(name, category, price, stock) {
    return this.productService.createProduct(name, category, price, stock);
  }

  getProducts() {
    return this.productService.getProducts();
  }
}

module.exports = ProductController;
