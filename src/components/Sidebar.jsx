import React from "react";
import SidebarData from "../SidebarData";

function Sidebar(props) {

    return (<div className="sidebar">
    <h1 className="sideTitle">ALL PROJETCS</h1>
    <hr></hr>
    <div className="listOfProjects">
        {props.projectTitles.map((data,index)=>{
        return (<h3 key={index}
                    id={index} >{data.projectTitle}</h3>)
        })}
    </div>
    </div>);    
}

export default Sidebar;