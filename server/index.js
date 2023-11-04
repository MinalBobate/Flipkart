import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Connection from './database/db.js';


const app = express();
dotenv.config();


app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(cors());

import Product from './model/productSchema.js';
import userRouter from './routes/user.js'

app.use('/',userRouter)


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;
Connection(USERNAME,PASSWORD);

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

