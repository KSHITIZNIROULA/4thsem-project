const express = require ('express')
const app = express()

const db = require('./model/index')

db.sequelize.sync({force: true})

const port = 8000



app.listen(port,()=>{
  console.log("port is actives")
})
