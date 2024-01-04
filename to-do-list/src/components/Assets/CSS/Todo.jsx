import '../CSS/Todo.css'

const Todo = () => {
  return (
    <div className='todo'>
        <div className="todo-header">To-do List</div>
        <div className='todo-add'>
            <input type="text" placeholder='Add your Task' className='todo-input'></input>
            <div className="todo-add-btn">ADD</div>
        </div>
        <div className="todo-list"></div>
    </div>
  )
}

export default Todo
