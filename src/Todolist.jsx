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
     <div>Todo List</div>
     <input 
     type='text' 
     placeholder='Todo item' 
     value={todo} 
     onChange={(e)=>settodo(e.target.value)}
     
     />
     <button  onClick={adddtata}>Add</button>

      <h1>Todo item</h1>
       {list!=[] && list.map((data, i)=>{
            return<div key={i}>
                <p>{data}</p>
                <button onClick={()=>removelist(i)}>Remove</button>
            </div>
       })}

       <div>{list.length>=1 &&  <button onClick={removeall}>Rest List</button>}</div>    
    </>
  )
}
