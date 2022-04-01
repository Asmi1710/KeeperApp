import React, {useState} from "react";


function ProjectTitle(props){
    
    const[projectTitle,setProjectTitle]=useState("untitled");

    function handleChange(event){
        var name = event.target.value;
        setProjectTitle(name);
    }
    

    return (<div className="inputArea">
          <input onChange={handleChange} className="projectTitle" placeholder="Untitled" value={projectTitle} />
          <button className="save" onClick={(event)=>{
              event.preventDefault();
              props.onSave(projectTitle);
          }}
          >Save</button>
          <button className="list" onClick={(event)=>{
              event.preventDefault();
              props.onAddList(props.id);
          }}
          >Add-To-List</button>
      </div>);
}


export default ProjectTitle;