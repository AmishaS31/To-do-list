import { useEffect, useState } from 'react';
import '../CSS/Todo.css'
import Todoitems from './Todoitems';

const Todo = () => {

const [todos,setTodos]=useState([]);
const inputRef = useRef(null);


let count =0;
const add = () =>{
   
  setTodos([...todos,{no:count++,text:inputRef.current.value,display:""}])
  inputRef.current.value="";
}

useEffect(()=>{
    console.log(todos);
},[todos])


  return (
    <div className='todo'>
        <div className="todo-header">To-do List</div>
        <div className='todo-add'>
            <input ref={inputRef} type="text" placeholder='Add your Task' className='todo-input'></input>
            <div onClick={()=>{add()}} className="todo-add-btn">ADD</div>
        </div>
        <div className="todo-list"></div>
        {todos.map((item,index)=>{
            return <Todoitems key={index} no={item.no} display={item.display} text={item.text}/>
        })
      }
    </div>
  )
}

export default Todo
