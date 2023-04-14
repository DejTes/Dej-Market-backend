const express = require('express');
const path = require('path')
const mongoose = require('mongoose');
const connectDB = require('./db/connect')
const products = require('./data/products')
const dotenv = require('dotenv');

const cors = require('cors');

dotenv.config()
connectDB()

const app = express();

//ROUTERS
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')
const orderRoutes = require('./routes/orderRoutes')
const uploadRoutes = require('./routes/uploadRoutes')


//middleware
app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send("dej-market started")
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/upload', uploadRoutes)

// PAYPAL
app.get('/api/config/paypal', (req, res) => 
  res.send(process.env.PAYPAL_CLIENT_ID))


  
  //a route to serve static files from the uploads directory.
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))



if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/dej-market/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'dej-market', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}
 
  
const port = process.env.PORT || 8000;
const uri = process.env.MONGO_URI;

const start = async () => {
    try {
      // console.log(`Connecting to MongoDB: ${uri}`);
        await connectDB(process.env.MONGO_URI)
        // console.log('MONGO_URI:', process.env.MONGO_URI);

      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
  

// const start = async (mongoURI) => {
//   try {
//     const conn = await mongoose.connect(mongoURI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//     });
//     console.log(`MongoDB connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//     process.exit(1);
//   }
// };

// Usage: await connectDB("mongodb://localhost/mydatabase")

  start();
