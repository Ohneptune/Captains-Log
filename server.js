const express = require('express');
const app = express();
const bodyPaser =require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const dotenv = require('dotenv');
const logsRouter = require('./routes/captainLogs')
dotenv.config()
const PORT = process.env.PORT;



app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.set('views', __dirname + '/views' );
app.set('layout', 'DefaultLayout')

app.use(methodOverride('_method'))
app.use(bodyPaser.urlencoded({ extended: false}))


mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true})
const db = mongoose.connection;
db.on('error', error => console.log(error));
db.once('open', () => console.log('Connected to Mongoose'))

app.use('/logs', logsRouter)


app.listen(PORT, ()=>{
    console.log('Server running on '+ PORT)
})