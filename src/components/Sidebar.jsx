import React from "react";
import SidebarData from "../SidebarData";

function Sidebar() {

    return (<div className="sidebar">
    <h1 className="sideTitle">ALL PROJETCS</h1>
    <hr></hr>
    {SidebarData.map(data=><h3>{data.title}</h3>)}
    </div>);    
}

export default Sidebar;