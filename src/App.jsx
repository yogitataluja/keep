import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Note from './Note'
import CreatNote from './CreatNote'



const App = () => {
    const [additems, updadditm] = useState([])

    const addnote1 = (note) => {
        updadditm((prevalue) => {
            return [ ...prevalue, note ]
        }) }

        const delnote1 = (id) =>{
            updadditm((prevdata) =>{ 
               return prevdata.filter((curdata, index)=>{
                    return index !== id
                 } )
                } )

            }


    return (<>
        <Header />
        <CreatNote passNote={addnote1} />
        
       <div className="notestyle">
       {additems.map((val,index)=>{
            return (<Note
                key={index}
                id={index}
                title={val.title}
                txtar={val.txtar}
                deleitem={delnote1}
            />)
        })}
       </div>
        
        <Footer/>
    </>
    )
}
export default App