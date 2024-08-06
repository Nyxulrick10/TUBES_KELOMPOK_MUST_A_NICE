const ProductDecorator = require("./ProductDecorator");

class WarrantyDecorator extends ProductDecorator {
  constructor(product, warranty) {
    super(product);
    this.warranty = warranty;
  }

  getDescription() {
    return `${super.getDescription()} with ${this.warranty} years warranty`;
  }
}

module.exports = WarrantyDecorator;
