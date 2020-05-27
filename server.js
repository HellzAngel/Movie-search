const express = require('express');
const mongoose = require('mongoose');
const path= require('path')
const config = require('config')


const app = express();


app.use(express.json());
const db = config.get('mongoURI')

mongoose
.connect(db,{useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})
.then(()=> console.log('MongoDB Connected..'))
.catch(err => console.log(err));

app.use('/api/user',require('./routes/api/user'));
app.use('/api/auth',require('./routes/api/auth'));

if(process.env.NODE_ENV  ==='production'){
    app.use(express.static('msearch/build'));

    app.get('*',(req , res)=>{
        res.sendFile(path.resolve(__dirname,'msearch','build', 'index.html'));
    });
}


const port = process.env.PORT || 5000
app.listen(port,() => console.log(`Server Started on PORT ${port}`));