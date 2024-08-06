class Handler {
  setNext(handler) {
    this.nextHandler = handler;
    return handler;
  }

  handle(request) {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
    return null;
  }
}

class InventoryHandler extends Handler {
  handle(request) {
    if (request.type === "inventory") {
      return `Handling inventory request: ${request.details}`;
    }
    return super.handle(request);
  }
}

module.exports = InventoryHandler;
