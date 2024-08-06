const Order = require("../models/Order");

class OrderService {
  constructor() {
    this.orders = [];
  }

  createOrder() {
    const order = new Order();
    this.orders.push(order);
    return order;
  }

  addProductToOrder(order, product, quantity) {
    order.addItem(product, quantity);
  }

  getOrderTotal(order) {
    return order.getTotal();
  }

  getOrderDetails(order) {
    return order.getOrderDetails();
  }
}

module.exports = OrderService;
