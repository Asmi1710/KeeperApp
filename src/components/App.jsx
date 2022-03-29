import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Sidebar from "./Sidebar";
import CreateArea from "./CreateArea";


// function getNote(note){
//     return (<Note key={note.id}
//     title={note.head} note={note.content} />);
// }

function App(){
    
    const [notes,setNotes]=useState ([ {title :"", content :""}]);

    function handleAdd(next){
        setNotes(prevNotes=>{
            return ([...prevNotes,{title:next.head,content:next.content}])
        });
        console.log(notes);
        
    }

    function handleDelete(){

    }

    
    return (
        <div className="container">
            <Sidebar />
            <div className="noteSection">
                <Header />
                <div className="inputArea">
                    <input className="projectTitle" placeholder="Title of project" />    
                </div>
                <CreateArea onAdd={handleAdd}/>
                <div>
                {notes.map((note,index)=>
                    <Note 
                    key={index}
                    id={index}
                    delete={handleDelete}
                    title={note.title} 
                    note={note.content} />
                    )}
                </div>
         {/* <Note title="Heading" note="Type the note" /> */}
                <Footer />
            </div>
        </div>
    );
}

export default App; 