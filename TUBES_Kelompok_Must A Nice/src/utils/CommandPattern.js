class Command {
  execute() {}
}

class AddProductCommand extends Command {
  constructor(inventory, product) {
    super();
    this.inventory = inventory;
    this.product = product;
  }

  execute() {
    this.inventory.addProduct(this.product);
  }
}

module.exports = { Command, AddProductCommand };
