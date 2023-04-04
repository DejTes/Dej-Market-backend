require('dotenv').config();
const express = require('express');
const app = express();


const morgan = require('morgan')
//database
const connectDB = require('./db/connect')


//ROUTERS
const authRouter = require('./routes/authRoutes')




//middleware
app.use(express.json())
app.use(morgan('tiny'))


app.get('/', (req, res) => {
    res.send("dej-market started")
})


app.use('/api/market/auth', authRouter)



const port = process.env.PORT || 8000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
  
  start();