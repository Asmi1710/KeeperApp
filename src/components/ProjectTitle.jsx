import React, {useState} from "react";


function ProjectTitle(props){
    
    const[projectTitle,setProjectTitle]=useState("untitled");

    function handleChange(event){
        var name = event.target.value;
        setProjectTitle(name);
    }



    return (<div className="inputArea">
          <input onChange={handleChange} className="projectTitle" placeholder="Untitled" value={projectTitle} />
          <button onClick={props.onSave}>Save</button>
      </div>);
}


export default ProjectTitle;