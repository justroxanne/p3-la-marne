const BaseModel = require('./BaseModel');

class UserModel extends BaseModel {
  constructor() {
    super('users');
  }

  // createUser() {
  //   return this.db.query(
  //     `INSERT INTO users (company_name,
  //     firstname,
  //     lastname,
  //     siret,
  //     telephone,
  //     email,
  //     password,
  //     website) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
  //     [
  //       company_name,
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

  // deleteUser(req, res) {
  //   const id = parseInt(req.params.id);

  //   return this.db.query(`DELETE FROM users WHERE id=?`, [id]);
  // }
}

module.exports = UserModel;
