const Inventory = require("../models/Inventory");

class InventoryService {
  constructor() {
    this.inventory = new Inventory();
  }

  addProduct(product) {
    this.inventory.addProduct(product);
  }

  getInventory() {
    return this.inventory.getProducts();
  }
}

module.exports = InventoryService;
