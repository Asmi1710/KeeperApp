import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Sidebar from "./Sidebar";
import CreateArea from "./CreateArea";
import ProjectTitle from "./ProjectTitle";
import { toBeInvalid } from "@testing-library/jest-dom/dist/matchers";




// function App(){
    
//     const [notes,setNotes]=useState ([]);

//     const [projects,setProjects]=useState([{projectTitle:"",notes:[]}])
//     // const [projects,setProjects]= useState([]);
//     // const [projectTitle,setProjectTitle]=useState("untitled");

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

//     function handleSave (){
        
//         }
    

//     return (
//         <div className="container">
//             <Sidebar />
//             <div className="noteSection">
//                 <Header />
//                 <ProjectTitle onSave={handleSave} />
//                 {/* <div className="inputArea">
//                     <input className="projectTitle" placeholder="Untitled" />    
//                 </div> */}
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


function App(){
    
    const [notes,setNotes]=useState ([]);
    const [project,setProject]=useState({projectTitle:"untitled", isAdded:false, noteList:[{title:"",content:""}]})
    const [projectList,setProjectList]= useState([]);

    
    function handleSave (newProjectTitle){
        console.log(newProjectTitle);
        setProject(()=>
        {
            if (!project.isAdded){
                return { 
                    projectTitle: newProjectTitle,
                    isAdded:false,
                    noteList:notes
                };
            }
            else{
                return { 
                    projectTitle: newProjectTitle,
                    isAdded:true,
                    noteList:notes
                };
            }
        
        });
        console.log(project);
    }

    function handleAddToList(id){
        if(!project.isAdded)
        {
            project.isAdded=true;
            setProjectList(prevProjectList=>{
                return [...prevProjectList,project]
            });
        }
        else{
            setProjectList(projectList.filter((projects,index)=>{
                return(index!==id)
            }));
            project.isAdded=true;
            setProjectList(prevProjectList=>{
                return [...prevProjectList,project]
            });

        }
    }

    function handleAdd(next){
        setNotes(prevNotes=>{
            return ([...prevNotes,{title:next.head,content:next.content}])
        });
        //console.log(notes);        
    }

    function handleDelete(id){
        setNotes(notes.filter((note,index)=>{
            return (index!==id);
        }));
        //console.log(id);
    }   

    return (
        <div className="container">
            <Sidebar projectTitles={projectList}/>
            <div className="noteSection">
                <Header />
                <ProjectTitle onSave={handleSave} onAddList={handleAddToList}  />
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



// to Do:
// 1. give key& id to every project
// 2. function handleAddToList()
// 3. maintain names of the projects in the sidebar
// 4. when added to list-> check whether id is new or not. 
// for this maintain a status (for each project) which which become "true" on first add.
// next addto list will be toBeInvalid
// default of this status is "false"
// 5. work on add new project button 
// 6. button to remove from list
// 7. launch it on firebase