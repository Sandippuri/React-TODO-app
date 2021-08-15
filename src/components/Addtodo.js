import React, { useState } from 'react';

export default function Addtodo({addTodo}) {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Todo cannot be empty");
        }else{
            addTodo(title,desc);
            settitle("");
            setdesc("");
        }
    }
    return (
        <div className="container">
           <h2 className="my-3">Add todo</h2>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>{settitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setdesc(e.target.value)}} className="form-control" id="desc" />
                </div>

                <button type="submit" className="btn btn-primary">Add</button>
            </form>

        </div>
    )
}
