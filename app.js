require('dotenv').config();
const express = require('express');

const app = express();
const connectDB = require('./db/connect');

const PORT = process.env.PORT || 5000;

const product_routes = require("./routes/products");    

app.get('/',(req, res)=>{

    res.send('Hi i am live');
})

// middle ware or to set router

app.use('/api/products',product_routes);

const start = async () => {
    try{
        await connectDB();
        app.listen(PORT, () => {
            console.log(PORT + 'yes I am connected');
        })
    }catch(e){
        console.log("some error is this one" + e);
    }
}


 start();



