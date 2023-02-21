const mongoose =  require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser:true,
    
    useUnifiedTopology:true,
   
}).then(() =>console.log("Db connection established"))
.catch(err => console.log("DB connection error", err))
