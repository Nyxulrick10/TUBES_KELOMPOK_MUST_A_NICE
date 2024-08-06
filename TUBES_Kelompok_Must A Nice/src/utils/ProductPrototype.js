const Product = require("../models/Product");

class ProductPrototype {
  constructor(proto) {
    this.proto = proto;
  }

  clone() {
    const clone = Object.create(this.proto);
    clone.name = this.proto.name;
    clone.category = this.proto.category;
    return clone;
  }
}

module.exports = ProductPrototype;
