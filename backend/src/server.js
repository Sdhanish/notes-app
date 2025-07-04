import express from "express";
const app = express();
import notesRoutes from './routes/notesRoutes.js'
import { connectDb } from "./config/db.js";
import cors from 'cors'


const PORT = process.env.PORT || 5001


app.use(express.json());
app.use(cors({
  origin:"http://localhost:5173",
}))
// app.use((req,res,next)=>{
//   console.log(`middleware ${req.method} ${req.url}`);
// next();
  
// })
app.use('/api/notes',notesRoutes)

connectDb().then(()=>{
app.listen(PORT,()=>{
  console.log(`Server runnning at ${PORT}`);
})
})


