const Product = require("../models/Product");
const ProductBuilder = require("../utils/ProductBuilder");

class ProductService {
  constructor() {
    this.products = [];
  }

  createProduct(name, category, price, stock) {
    const product = new ProductBuilder().setName(name).setCategory(category).setPrice(price).setStock(stock).build();
    this.products.push(product);
    return product;
  }

  getProducts() {
    return this.products;
  }
}

module.exports = ProductService;
