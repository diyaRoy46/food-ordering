const express = require('express')
// const ejs = require('express-ejs-layouts')
const app = express()
const ejs = require('ejs')
const path = require('path')
const expressLayout = require('express-ejs-layouts')
const PORT = process.env.PORT || 3300
const mongoose= require('mongoose')

//database connection
// const url = 'mongodb://localhost/food';

mongoose.connect(process.env.MONGODB_URI|| 'mongodb://localhost/food', { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Database connected...');
}).catch(err => {
    console.log('Connection failed...')
});

//Asset
app.use(express.static('public'))
app.use(express.static('resources'))

//set template engine

app.use(expressLayout)
app.set('views',path.join(__dirname, '/resources/views') )
app.set('view engine', 'ejs')

require('./routes/web')(app)



app.listen(PORT, ()=>{
console.log(`Listening on port ${PORT}`)
})