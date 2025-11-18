import React,{ useState } from "react";
import Header from "./Haeder";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./Createarea";
 function App(){
    const[notes,setnotes]=useState([]);
    function addNotes(newNotes){
      setnotes(prev=>{
         return[...prev,newNotes];
      });
    }
    function deleteNote(id){
      setnotes(prev=>{
         return prev.filter((noteItem,index)=>{
            return index!==id;
         });
      });

    }
    return (<div><Header />
    <CreateArea onAdd={addNotes} />
    {notes.map((notesItem,index)=>{
      return <Note key={index} id={index} title={notesItem.title} content={notesItem.content} onDelete={deleteNote}/>
    })}
    <Footer /></div>)
 }
 
export default App;