// if(process.env.NODE_ENV !== 'production'){
//     require('dotenv').parse();
// }
const DATA_BASE = "mongodb://127.0.0.1:27017/library";
const express = require('express');
const app = express();
const layout = require('express-ejs-layouts');
const routes = require('./routes/routes');
const mongoose = require('mongoose');


app.set('view engine','ejs');
app.set('views',__dirname + '/views');
app.set('layout','layouts/layout');
app.use(express.static('public'));
app.use(layout);
app.use('/',routes);

mongoose.connect(DATA_BASE,{
    useNewUrlParser:true
}).then(()=>{
    console.log('connected to database');
}).catch((err)=>{
    console.log(err);
})

app.listen(process.env.PORT || 5000 ,()=>{
    console.log(`server is listening to 5000`);
})
