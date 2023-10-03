const { none } = require("../../todos/middleware/multerInit")
const userLogin = require("../services/loginService")
const bcrypt = require('bcrypt')

module.exports.postReq=async (req,res)=>{
  let username = req.body.username
  let password = req.body.password

  let user = await userLogin(username)

  if(!user){
    res.render("login",{
      err : "User Not Found"
    })

    return
  }

  let match  = await bcrypt.compare(password,user.password)

  if(!match){
    res.render("login",{err : "Invalid credentials"})
    return
  }
  req.session.isAuthenticated = true
  req.session.username = user.username
  req.session.UName = user.name
  res.redirect("/todos/")
  
}

module.exports.getReq = (req,res)=>{
  if(req.session.isAuthenticated)
  {
    res.redirect("/todos/")
  }
  else
  {
    res.render("login",{err : ""})
  }
}