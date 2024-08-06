const Product = require("../models/Product");

class ProductBuilder {
  constructor() {
    this.product = new Product();
  }

  setName(name) {
    this.product.name = name;
    return this;
  }

  setCategory(category) {
    this.product.category = category;
    return this;
  }

  setPrice(price) {
    this.product.price = price;
    return this;
  }

  setStock(stock) {
    this.product.stock = stock;
    return this;
  }

  build() {
    return this.product;
  }
}

module.exports = ProductBuilder;
