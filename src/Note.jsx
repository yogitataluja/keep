import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';

const Note = (props)=>{
    const delnote=()=>{
        props.deleitem(props.id)
    }

    
    return(<>
    <div className="note1">
    <h1>{props.title}</h1>
    <br/>
    <p >{props.txtar}</p>
    <button className="delbtn" onClick={delnote}><DeleteIcon /> </button>
    </div>
    </>
   )
}
export default Note