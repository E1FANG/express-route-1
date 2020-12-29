const express = require('express')
const app = express()
const path = require('path');
// view engine setup
app.set('views', path.join(__dirname, 'views')); //设置视图目录:当前目录的views
app.set('view engine', 'ejs'); //设置试图引擎：ejs

//引入页面
const indexRouter = require('./routes');
const usersRouter = require('./routes/users');


// app.use((req,res,next)=>{
//   res.write(`this is first \n`)
//   next()
// })
//
// app.use((req,res,next)=>{
//   res.write(`this is second \n`)
//   next()
// })

app.use('/xxx',(req,res,next)=>{
  res.write(`this is first \n`)
  res.write(`this is second \n`)
  res.write(`there are xxx`)
  res.end()
})

app.use('/',indexRouter)
app.use('/users',usersRouter)

app.listen(3000,()=>{
  console.log(`listen 3000 start`)
})



module.exports = app;
