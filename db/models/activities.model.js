
const { Model, DataTypes } = require('sequelize')
const ACTIVITIES_TABLE = 'activities'
const ActivitiesSchema = {
    id:{
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    task_id:{
        allowNull: false,
        unique: true,
        primaryKey: true,
        type: DataTypes.STRING
    },
    name:{
        allowNull: false,
        type: DataTypes.STRING
    },
    description:{
        allowNull: false,
        type: DataTypes.STRING
    },
    is_area:{
        allowNull: false,
        type: DataTypes.BOOLEAN
    },
    is_recursive:{
        allowNull: false,
        type: DataTypes.BOOLEAN
    },
    date:{
        allowNull: false,
        type: DataTypes.STRING
    },
    single_marker:{
        allowNull: false,
        type: DataTypes.JSON
    },
    markers:{
        allowNull: false,
        type: DataTypes.ARRAY(DataTypes.TEXT)
    }
}

class Activities extends Model {
    static associate(){
        // models
    }

    static config(sequelize){
        return{
            sequelize,
            tableName: ACTIVITIES_TABLE,
            modelName: 'Activities',
            timestamps: false
        }
    }
}

module.exports = {
    ACTIVITIES_TABLE,
    ActivitiesSchema,
    Activities
}