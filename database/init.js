const mongoose = require('mongoose')

const uri = process.env.DBURL

module.exports = ()=>{
  return mongoose.connect(uri)
}