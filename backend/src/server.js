import express from "express";
const app = express();
import notesRoutes from './routes/notesRoutes.js'
import { connectDb } from "./config/db.js";
import cors from 'cors'

import path from 'path';


const PORT = process.env.PORT || 5001

const __dirname = path.resolve();


app.use(express.json());


if(process.env.NODE_ENV !== "production"){
app.use(cors({
  origin:"http://localhost:5173",
}))
}

// app.use((req,res,next)=>{
//   console.log(`middleware ${req.method} ${req.url}`);
// next();
  
// })
app.use('/api/notes',notesRoutes)




if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname,"../frontend/dist")))

app.get("*",(req,res)=>{
  res.sendFile(path.join(__dirname,'../frontend','dist','index.html'))
});
}

connectDb().then(()=>{
app.listen(PORT,()=>{
  console.log(`Server runnning at ${PORT}`);
})
})


