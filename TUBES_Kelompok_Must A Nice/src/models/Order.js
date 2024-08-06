class Order {
  constructor() {
    this.items = [];
    this.total = 0;
  }

  addItem(product, quantity) {
    this.items.push({ product, quantity });
    this.total += product.price * quantity;
  }

  getTotal() {
    return this.total;
  }

  getOrderDetails() {
    return this.items.map((item) => ({
      product: item.product.name,
      quantity: item.quantity,
      price: item.product.price,
      total: item.product.price * item.quantity,
    }));
  }
}

module.exports = Order;
