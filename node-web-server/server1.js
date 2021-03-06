const express = require('express')
const hbs = require('hbs')
const fs = require('fs')
const port = process.env.PORT || 3000
var app = express()
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine','hbs')
app.use(express.static(__dirname+'/public'))
hbs.registerHelper('getcurrentyear',()=>{
   return new Date().getFullYear()
})
hbs.registerHelper('getcurrenttime',()=>{
   return new Date().toLocaleTimeString()
})
app.use((req,res,next)=>{
  var now = new Date().toLocaleTimeString()
  var log = `${now} ${req.method} ${req.url}`
  console.log(log)
  fs.appendFile('server.log',log + '\n',(err)=>{
    if (err)
    console.log(err);
  })
  next()
})

// app.use((req,res,next)=>{
//   res.render('maintain.hbs'),{
//   }
// })
hbs.registerHelper('screamit',(text)=>{
  return text.toUpperCase()
})

app.get('/',(req, res)=>{
  res.render('home.hbs',{
    welcome : 'welcome to  my home page',
    text : "you are here to see my homepage",
    info : "there is some information here"
    // currentyear : new Date().getFullYear(),
    // currenttime : new Date().toLocaleTimeString()
  })
})
app.get ('/aboutpage',(req,res)=>{
  res.render('about.hbs',{
    welcome :'about page',
    // currentyear : new Date().getFullYear(),
    // currenttime : new Date().toLocaleTimeString()
  })
})
app.get('/aboutpage/projects',(req,res)=>{
  res.render('projects.hbs',{
    welcome : `welcome to the projects page. '/n' `,
    message : "Check them out",

  })
})
app.get('/aboutpage/projects/nothing',(req,res)=>{
  res.render('nothing.hbs',{
    welcome : `There is nothing to see `
  })
})
app.listen(port,()=>{
  console.log(`server started`);
})
