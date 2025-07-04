import mongoose from 'mongoose'

import dotenv from 'dotenv'

dotenv.config();

export async function connectDb(){
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Mongodb connected');
    
  } catch (error) {
    console.error('mongodb connection error',error);
    process.exit(1);
    
  }
}

//tlScEHtbbPZe2vj1 