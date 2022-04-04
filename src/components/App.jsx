import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Sidebar from "./Sidebar";
import CreateArea from "./CreateArea";
import ProjectTitle from "./ProjectTitle";




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
    const [project,setProject]=useState({projectTitle:"untitled", isAdded:false, index:null, noteList:[{title:"",content:""}]});
    const [projectList,setProjectList]= useState([]);
    const [projectCounter,setProjectCounter]= useState(0);

    
    function handleAddProject(){
        alert ("lets add");
        setProjectCounter(projectCounter+1);
        setNewProject ();
    }

    function setNewProject (){
        setNotes ([]);
        setProject({projectTitle:"untitled", isAdded:false, index:null, noteList:[]});
    }


    function handleSave (newProjectTitle){
        console.log(newProjectTitle);
        setProject((prevProject)=>
        {
            return { 
                projectTitle: newProjectTitle,
                isAdded:prevProject.isAdded,
                index:projectCounter,
                noteList:notes
                };
        
        });
    }

    function handleAddToList(id,title){
        if(!project.isAdded)
        {
            project.isAdded=true;
            //console.log("not-added: counter is: "+ projectCounter);
            // setProjectCounter(projectCounter+1);
            // project.index=projectCounter;
            // console.log("not-added: counter is: "+ project.index);
            setProjectList(prevProjectList=>{
                return [...prevProjectList,project]
            });
            //console.log("not-added: list= "+ projectList);
        }
        else{
            console.log("added: counter is: "+ projectCounter+" & id="+ id);
            setProjectList(projectList.filter((projects,index)=>{
                return(index!==id)
            }));
            setProjectList(prevProjectList=>{
                return [...prevProjectList,project]
            });
        }
    }

    function handleAdd(next){
        setNotes(prevNotes=>{
            return ([...prevNotes,{title:next.head,content:next.content}])
        });   
    }

    function handleDelete(id){
        setNotes(notes.filter((note,index)=>{
            return (index!==id);
        }));
    }   

    return (
        <div className="container">
            <Sidebar projectTitles={projectList} addProject={handleAddProject}/>
            <div className="noteSection">
                <Header />
                <ProjectTitle onSave={handleSave} onAddList={handleAddToList} key={projectCounter} id={projectCounter}  />
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
//
// 1. launch it on firebase
// 2. handle click on project list item -> get index and project item and 
// setProject to matching index
// 3. handle background
// 4. handle Footer
// 5. handle scrolling of Sidebar
// 6. handle deleting projects 
// 8. work on drag and set position of sticky notes
// 9. make project list to toggle and increase the workspace
// 7. ask friends to test it 