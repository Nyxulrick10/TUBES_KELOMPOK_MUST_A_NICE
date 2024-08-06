const UserService = require("./UserService");

class AuthService {
  constructor() {
    this.userService = new UserService();
  }

  login(email, password) {
    if (this.userService.validateUser(email, password)) {
      return `User ${email} logged in successfully`;
    } else {
      throw new Error("Invalid email or password");
    }
  }

  register(name, email, password) {
    return this.userService.registerUser(name, email, password);
  }
}

module.exports = AuthService;
