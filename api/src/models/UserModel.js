const BaseModel = require('./BaseModel');

class UserModel extends BaseModel {
  constructor() {
    super('users');
  }

  // updateUser() {
  //   const {
  //     company_name,
  //     firstname,
  //     lastname,
  //     siret,
  //     telephone,
  //     email,
  //     password,
  //     website,
  //   } = req.body;
  //   const id = parseInt(req.params.id);

  //   return this.db.query(
  //     `UPDATE users SET raison_sociale = ?, firstname = ?, lastname = ?, siret = ?, telephone = ?, email = ?, password = ?, website = ?`,
  //     [
  //       raison_sociale,
  //       firstname,
  //       lastname,
  //       siret,
  //       telephone,
  //       email,
  //       password,
  //       website,
  //     ]
  //   );
  // }
}

module.exports = UserModel;
