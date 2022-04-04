import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";


function Sidebar(props) {

    function handleBackToOldProject(){
        alert("I'm clicked");
    }

    return (<div className="sidebar">
        <div className="sidebarHead">
            <h1 className="sideTitle">📝 Projects</h1>
            <button onClick={props.addProject}><FontAwesomeIcon icon={faPlusSquare} /> <span>Add New</span> </button>
        </div>
    <hr></hr>
    <div className="listOfProjects">
        {props.projectTitles.map((data,index)=>{
        return (<h3 key={index}
                    id={index} onClick={handleBackToOldProject}>{data.projectTitle}</h3>)
        })}
    </div>
    </div>);    
}

export default Sidebar;