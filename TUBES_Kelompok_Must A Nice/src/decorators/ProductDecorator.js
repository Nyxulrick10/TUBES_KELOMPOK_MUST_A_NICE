class ProductDecorator {
  constructor(product) {
    this.product = product;
  }

  getDescription() {
    return this.product.getDescription();
  }
}

module.exports = ProductDecorator;
