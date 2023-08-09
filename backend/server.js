const dotenv = require('dotenv');
const app = require('./app');
const mongoose = require('mongoose');

dotenv.config({path: './config.env'});

// connect dataBase 
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mongoose.connect(DB, {
  useNewUrlParser:true,
  useCreateIndex:true,
  useUnifiedTopology:true,
  useFindAndModify:false
}).then(()=>{
  console.log("successful connect DB");
}).catch((error)=>{
  console.log("💣DB => "+error)
})

// connect server  
const PORT = process.env.PORT || 8080
app.listen(PORT, ()=>{
  console.log(`server running on ${PORT} ....`);
})