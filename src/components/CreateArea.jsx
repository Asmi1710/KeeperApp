import React,{useState} from "react";

function CreateArea(props) {
  
    const [next,setNext]=useState({head :"", content :""});

    function handleChange(event){
        let {name,value}= event.target;
        setNext(prevValue=>{
            if(name==="title")
            {
                return ({head:value, content:prevValue.content });
            }
            else
            {
                return ({head:prevValue.head, content:value})
            }
        }

        );
      }

    return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={next.head} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={next.content}/>
        <button onClick={ (event)=>{
          event.preventDefault();
          props.onAdd(next);
          next.head="";
          next.content="";
        }
        }>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
