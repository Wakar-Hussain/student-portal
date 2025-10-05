
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'; 
dotenv.config();

import cors from 'cors';
       
import routes from './routes/student.js';



const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI, {
 
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/students', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));