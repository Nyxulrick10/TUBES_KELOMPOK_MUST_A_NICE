const OrderService = require("../services/OrderService");

class OrderController {
  constructor() {
    this.orderService = new OrderService();
  }

  createOrder() {
    return this.orderService.createOrder();
  }

  addProductToOrder(order, product, quantity) {
    this.orderService.addProductToOrder(order, product, quantity);
  }

  getOrderTotal(order) {
    return this.orderService.getOrderTotal(order);
  }

  getOrderDetails(order) {
    return this.orderService.getOrderDetails(order);
  }
}

module.exports = OrderController;
