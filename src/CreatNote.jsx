import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add';

const CreatNote = (props) => {
    const [expend, setexpand] = useState(false)

    const [note, updnote] = useState({
        title: "",
        txtar: ""
    })

    // for store what we type in input to an array
    const addnote = (event) => {

        const { name, value } = event.target

        updnote((prevalue) => {
            return {
                ...prevalue,
                [name]: value
            }
        })
    }

    //for render save data when button click


    const SaveNote = (event) => {
        event.preventDefault();
        props.passNote(note)
        updnote({
            title: "",
            txtar: ""
        })
    }

    const expandIt = () => {
        setexpand(true)
    }

    const bcknrml=() =>{
        setexpand(false)
    }


  
    return (<>
        <div className="main_note" onDoubleClick={bcknrml}>
            <form >
                <div className="creatNote">
                    {expend ? <input type="text" placeholder="Title"
                        autoComplete="off" name="title" value={note.title}
                        onChange={addnote} /> : null}
                    <textarea  rows="" cols=""   placeholder="Take a note..." name="txtar" value={note.txtar} onChange={addnote} onClick={expandIt}  />
                    {expend ? <button type="button" className="plus_sign" onClick={SaveNote} ><AddIcon /></button> : null}
                </div>

            </form>

        </div>
    </>

    )


}
export default CreatNote