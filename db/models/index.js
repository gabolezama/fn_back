const { Activities, ActivitiesSchema } = require("./activities.model");

function setupModels(sequelize){
    Activities.init(ActivitiesSchema, Activities.config(sequelize));

    // User.associate(sequelize.models)
    // Customer.associate(sequelize.models)
}
module.exports = setupModels;