import React from "react";

function Note (props){
    return (<div className="note">
        <h1 contentEditable="true">{props.title}</h1>
        <p contentEditable="true">{props.note}</p>
    </div>);
}


export default Note;
