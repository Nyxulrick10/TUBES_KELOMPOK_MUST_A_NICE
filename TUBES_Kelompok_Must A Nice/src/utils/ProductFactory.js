class Electronics {
  constructor(name) {
    this.name = name;
    this.category = "Electronics";
  }
}

class Furniture {
  constructor(name) {
    this.name = name;
    this.category = "Furniture";
  }
}

class ProductFactory {
  createProduct(type, name) {
    switch (type) {
      case "Electronics":
        return new Electronics(name);
      case "Furniture":
        return new Furniture(name);
      default:
        throw new Error("Unknown product type");
    }
  }
}

module.exports = ProductFactory;
