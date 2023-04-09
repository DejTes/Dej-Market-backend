const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./db/connect')
const products = require('./data/products')
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();

//database
dotenv.config()

//ROUTERS
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')
const orderRoutes = require('./routes/orderRoutes')

//middleware
app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send("dej-market started")
})


app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)



const port = process.env.PORT || 8000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        // console.log('MONGO_URI:', process.env.MONGO_URI);

      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
  
  start();
