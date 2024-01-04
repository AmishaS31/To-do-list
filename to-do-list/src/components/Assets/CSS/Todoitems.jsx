import './CSS/Todoitems.css'
import tick from './components/Assets/tick.png'
import not_tick from './components/Assets/not_tick.png'
import cross from './components/Assets/cross.png'

const Todoitems = ({no,display,text}) => {

  const toggle = (no) =>{
    let data = JSON.parse(localStorage.getItem("todos"));
    for(let i=0;i<data.length;i++)
    {
      if(data[i].no===no){
          if(data[i].display===""){
            data[i].display="line-through";
          }
      }
    }

  }

  return (
    <div className='todoitems'>
      <div className='todoitems-container' onClick={()=>{toggle(no)}}>
      {display===""?<img src={not_tick} alt=""/>:<img src={tick} alt=""/>}
      <div className='todoitems-text'>{text}</div>
      </div>
      <img className="todoitems-cross-icon" src={cross} alt=""/>
    </div>
  )
}

export default Todoitems
