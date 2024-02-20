const { models } = require('./../libs/sequelize')
class ActivitiesService {
  constructor() {}

  async create(data) {
    const newActivity = await models.Activities.create(data);
    return newActivity;
  }

  async find() {
    const rta = await models.Activities.findAll();
    return rta;
  }

  async findOne(id) {
    const activity = await models.Activities.findByPk(id);
    return activity;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const rta = await user.update(changes);
    return rta
  }

  async delete(id) {
    const rta = await models.Activities.destroy({where: {task_id: id}})
    return { id };
  }
}

module.exports = ActivitiesService;
