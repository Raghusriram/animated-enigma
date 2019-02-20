const express = require('express')

var app = express()

app.get('/',(req, res)=>{
  // res.send('<h2>hello! express</h2>')
  res.send({
    name :'Raghu',
    Likes :['all ', 'the', 'things ', 'i ', 'love'],
    age : 20

  })
})
app.get ('/aboutpage',(req,res)=>{
  res.send("<h1>do you know something??</h1>")
})
app.get('/aboutpage/kunal',(req,res)=>{
  res.send('<h1>kunal is bad boy</h1>')
})
app.listen(3000)
