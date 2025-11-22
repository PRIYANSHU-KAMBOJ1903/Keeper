import React,{useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
function CreateArea(props){
    const [isExpandable,setExpandable]=useState(false);

    const [note,setNote]=useState({title:"",content:""});
    function handle(){
        setExpandable(true);
    }
    function handleChange(event){
        const {name,value}=event.target;
        setNote(prev=>{return {
            ...prev,
            [name]:value
        };});
    }
    function SubmitNote(event){
        props.onAdd(note);
        setNote({
            title:"",
            content:"",
        });
        event.preventDefault();
    }
    return (<div><form className="create-note">
        {isExpandable&&<input type="text" value={note.title} onChange={handleChange} name="title" placeholder="Title"/>}
        <textarea type="text" row={isExpandable?"3":"1"} placeholder="Take a nore here" value={note.content} onChange={handleChange} name="content" onClick={handle}/>
       <Zoom in={isExpandable}><div> <Fab onClick={SubmitNote}><AddIcon /></Fab></div></Zoom>
        </form></div>);
}
export default CreateArea;
