import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../NoteDetail";
import Sidebar from "./Sidebar";


// function getNote(note){
//     return (<Note key={note.id}
//     title={note.head} note={note.content} />);
// }

function App(){
    return (
        <div className="container">
            <Sidebar />            
            <Header /> 
            <div>
                <input placeholder="Title of project" />
                {notes.map(note=>
                <Note 
                key={note.id}
                title={note.head} 
                note={note.content} />
                )}
            </div>
         {/* <Note title="Heading" note="Type the note" /> */}
            <Footer />
        </div>
    );
}

export default App; 