const BaseModel = require('./BaseModel');

class CategoryModel extends BaseModel {
  constructor() {
    super('categories');
  }
}

module.exports = CategoryModel;
