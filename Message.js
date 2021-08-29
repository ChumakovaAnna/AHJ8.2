const { v4: uuidv4 } = require('uuid');

module.exports = class Message {
  constructor(user, message) {
    this.user = user;
    this.message = message;
    this.date = new Date().toLocaleString();
    this.id = uuidv4();
  }
};
