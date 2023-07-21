const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const colors = require('colors')
const dotenv = require('dotenv')
const connectDb = require('./config/connectDb')

// dotenv config
dotenv.config();

// database
connectDb()

// rest object
const app = express();

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json())

// routes
app.get('/',(req,res)=>(
    res.send('<h1>hello world</h1>')
))

// port
const PORT = 8080 || process.env.PORT

// listen
app.listen(PORT,()=>(
    console.log(`Server Running Port: ${PORT}`.bgYellow)
))