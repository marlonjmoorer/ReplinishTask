const Sequelize = require('sequelize')
const constants = require('./constants')

const sequelize= new Sequelize({
    dialect:"sqlite",
    storage:"./db.sqlite",
    logging: false
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const Template= sequelize.define("template",{
    description:{
    type: Sequelize.STRING
    },
    priority:{
    type:Sequelize.INTEGER
    }, 
    name:{
        type:Sequelize.STRING
    },
    estimate:{
        type:Sequelize.INTEGER
    },
    recurring:{
        type:Sequelize.BOOLEAN
    }
})  
const Task = sequelize.define('task', {
    status: {
        type:   Sequelize.ENUM,
        values: Object.keys(constants.Status)
    },
    description:{
      type: Sequelize.STRING
    },
    priority:{
      type:Sequelize.INTEGER
    },
    progress:{
        type:Sequelize.INTEGER
    }, 
    notes:{
      type: Sequelize.STRING
    },
    feedback:{
        type: Sequelize.STRING
    },
    name:{
        type:Sequelize.STRING
    },
    estimate:{
        type:Sequelize.INTEGER
    },
    recurring:{
        type:Sequelize.BOOLEAN
    },
    rank:{
        type:Sequelize.INTEGER
    }
})
const TimeInStatus=sequelize.define("time_in_status",{
    status:{
        type:Sequelize.STRING
    },
    time:{
        type:Sequelize.INTEGER
    }
})
Task.hasMany(TimeInStatus)
TimeInStatus.belongsTo(Task)
const sync=()=>{
    return Promise.all([
       Task.sync({force: true}),
       Template.sync({force:true}),
       TimeInStatus.sync({force:true})
    ])
}


module.exports={Task,Template,TimeInStatus,sync}