import React,{useState} from "react";

function CreateArea(props){
    const [note,setNote]=useState({title:"",content:""});
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
        <input type="text" value={note.title} onChange={handleChange} name="title" placeholder="Title"/>
        <textarea type="text" row="3" placeholder="Take a nore here" value={note.content} onChange={handleChange} name="content"/>
        <button onClick={SubmitNote}>Add</button>
        </form></div>);
}
export default CreateArea;
