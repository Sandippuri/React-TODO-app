import React from 'react'

export default function TodoItem({ todoitem, onDelete }) {
    return (<>
        <div className="my-3">
            <h5>{todoitem.title}</h5>
            <p>{todoitem.desc}</p>
            <button className="btn btn-danger" onClick={() => { onDelete(todoitem) }}>Delete</button>
            <hr />
        </div>
        </>
    )
}
