import React, { useState } from 'react'

export const Todolist = () => {
    const [todo, settodo]  = useState("")
    const [list, setlist]= useState([])
     
     const adddtata= ()=>{
        setlist((list)=>{
              const updatelist = [...list, todo]
              console.log(updatelist)
              settodo('')
              return updatelist;
              
          })

         
     }
     const removelist = (i)=>{
          const filterdata = list.filter((data, id)=>{
             return i!=id
          });
          setlist(filterdata)
     }
     const removeall = ()=>{
           setlist([])
     }
     
    return (

    <>
    <div className='all'>
     <div className='header'>Todo List</div>
     <div >
     <input className='input'
     type='text' 
     placeholder='Todo item' 
     value={todo} 
     onChange={(e)=>settodo(e.target.value)}
     required
     />
    
    
     <button  onClick={adddtata} className='add'>Add</button>
     </div>
      <h1 className='header'>Todo item</h1>
       {list!=[] && list.map((data, i)=>{
            return<div key={i}>
                <p className='p1'>{data}</p>
                <button onClick={()=>removelist(i) } className="remove">Remove</button>
            </div>
       })}

       <div>{list.length>=1 && <button onClick={removeall} className="removeall">Rest List</button>}</div>    
       </div>
    </>
  )
}
