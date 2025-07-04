import Note from "../models/Note.js"

export const getAllNotes = async(req,res)=>{
try {
  const data = await Note.find()
  res.status(200).json({data})
} catch (error) {
  console.error(error);
  res.status(500).json({message:'Internal Server error'})
  
}
}


export const createNotes = async(req,res)=>{
  try {
    const {title,content}  = req.body;
    const newNote = new Note({title:title,content:content})
    
    const savedNote = await newNote.save();
    res.status(201).json({message:'Note created successsfully',data:savedNote})
  } catch (error) {
    console.error(error);
  res.status(500).json({message:'Internal Server error'})
  
  }
}


export const updateNotes = async(req,res)=>{
  try {
    const {id} = req.params;
    const {title,content} =  req.body;

    const updatedNote = await Note.findByIdAndUpdate(id,{title,content})
    res.status(200).json({message:'updated successfully',data:updatedNote})


  } catch (error) {
    console.error(error);
  res.status(500).json({message:'Internal Server error'})
  
  }
}

export const deleteNotes = async(req,res)=>{
 try {

  const {id} = req.params;
  const deletedNote = await Note.findByIdAndDelete(id);
   res.status(200).json({message:'successflly deleted the post',data:deletedNote})
 } catch (error) {
  console.error(error);
  res.status(500).json({message:'Internal Server error'})
  
 }
}



export const getNote = async(req,res)=>{
  try {
    const {id} = req.params;
    const data = await Note.findById(id);
    res.status(200).json({data})
  } catch (error) {
    console.error(error);
  res.status(500).json({message:'Internal Server error'})
  
  }
}