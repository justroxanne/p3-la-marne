class BaseController {
  req;
  res;
  model;

  constructor(req, res, model) {
    this.req = req;
    this.res = res;
    this.model = model;
  }

  getAll() {
    this.model.getAll().then(([results]) => this.sendJson(results));
  }

  getById() {
    this.model
      .getById(this.req.params.id)
      .then(([results]) => this.sendJson(results));
  }

  create() {
    this.model.create(this.req.body).then(([result]) => {
      this.res
        .location(`/api/${this.table}/${result.insertId}`)
        .sendStatus(201);
    });
  }

  update() {
    this.model.update(this.req.body, this.req.params.id)
    .then(([result]) => {
      this.res
        .location(`/api/${this.table}/${result.insertId}`)
        .sendStatus(204);
    });;
  }

  delete() {
    this.model.delete(this.req.params.id);
  }

  sendJson(data) {
    this.res.status(200).json(data);
  }
}

module.exports = BaseController;
