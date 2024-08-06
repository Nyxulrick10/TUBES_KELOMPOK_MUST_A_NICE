const User = require("../models/User");

class UserService {
  constructor() {
    this.users = [];
  }

  registerUser(name, email, password) {
    const user = new User(name, email, password);
    this.users.push(user);
    return user;
  }

  getUserByEmail(email) {
    return this.users.find((user) => user.email === email);
  }

  validateUser(email, password) {
    const user = this.getUserByEmail(email);
    return user && user.password === password;
  }
}

module.exports = UserService;
