require('dotenv').config();
const userApi = require('./app/api/userApi');
const userRouter = require('./app/routes/userRouter');
const express = require('express');
const hbs = require('express-handlebars');
const app = express();

// Configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/user', userApi);
app.engine('hbs', hbs.engine({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');
app.use('/user', userRouter);

// Listen
app.listen(8080, function(){
    console.log('Serwer Node.js działa');
});