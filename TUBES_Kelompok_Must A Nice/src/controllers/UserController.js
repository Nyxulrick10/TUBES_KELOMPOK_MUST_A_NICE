const AuthService = require("../services/AuthService");

class UserController {
  constructor() {
    this.authService = new AuthService();
  }

  register(name, email, password) {
    return this.authService.register(name, email, password);
  }

  login(email, password) {
    return this.authService.login(email, password);
  }
}

module.exports = UserController;
