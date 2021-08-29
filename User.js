const { v4: uuidv4 } = require('uuid');

module.exports = class User {
  constructor(name) {
    this.name = name;
    this.id = uuidv4();
  }
};
