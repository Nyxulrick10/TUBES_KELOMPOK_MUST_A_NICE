const InventoryService = require("../services/InventoryService");

class InventoryController {
  constructor() {
    this.inventoryService = new InventoryService();
  }

  addProduct(product) {
    this.inventoryService.addProduct(product);
  }

  getInventory() {
    return this.inventoryService.getInventory();
  }
}

module.exports = InventoryController;
