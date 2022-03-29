import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Sidebar from "./Sidebar";
import CreateArea from "./CreateArea";
import ProjectTitle from "./ProjectTitle";




function App(){
    
    const [notes,setNotes]=useState ([]);

    const [projects,setProjects]=useState([{projectTitle:"",notes:[]}])
    // const [projects,setProjects]= useState([]);
    // const [projectTitle,setProjectTitle]=useState("untitled");

    function handleAdd(next){
        setNotes(prevNotes=>{
            return ([...prevNotes,{title:next.head,content:next.content}])
        });
        console.log(notes);
        
    }

    function handleDelete(id){
        setNotes(notes.filter((note,index)=>{
            return (index!==id);
        }));
        console.log(id);
    }

    function handleSave (){
        
        }
    

    return (
        <div className="container">
            <Sidebar />
            <div className="noteSection">
                <Header />
                <ProjectTitle onSave={handleSave} />
                {/* <div className="inputArea">
                    <input className="projectTitle" placeholder="Untitled" />    
                </div> */}
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


// function App(){
    
//     const [notes,setNotes]=useState ([]);

//     const [projects,setProjects]=useState([{projectTitle:"",notes:[{title:"",content:""}]}])
//     // const [projects,setProjects]= useState([]);
//     // const [projectTitle,setProjectTitle]=useState("untitled");

    
//     function handleSave (){
        
//     }


//     function handleAdd(next){
//         setNotes(prevNotes=>{
//             return ([...prevNotes,{title:next.head,content:next.content}])
//         });
//         console.log(notes);
        
//     }

//     function handleDelete(id){
//         setNotes(notes.filter((note,index)=>{
//             return (index!==id);
//         }));
//         console.log(id);
//     }

    

//     return (
//         <div className="container">
//             <Sidebar />
//             <div className="noteSection">
//                 <Header />
//                 <ProjectTitle onSave={handleSave} />
//                 <CreateArea onAdd={handleAdd}/>
//                 <div>
//                 {notes.map((note,index)=>
//                     <Note 
//                     key={index}
//                     id={index}
//                     delete={handleDelete}
//                     title={note.title} 
//                     note={note.content} />
//                     )}
//                 </div>
//          {/* <Note title="Heading" note="Type the note" /> */}
//                 <Footer />
//             </div>
//         </div>
//     );
// }

export default App; 