import './CSS/Todoitems.css'
import tick from './components/Assets/tick.png'
import not_tick from './components/Assets/not_tick.png'
import cross from './components/Assets/cross.png'

const Todoitems = () => {
  return (
    <div className='todoitems'>
      <div className='todoitems-container'>
      <img src={not_tick} alt=""/>
      <img src={tick} alt=""/>
      <div className='todoitems-text'></div>
      </div>
      <img src={cross} alt=""/>
    </div>
  )
}

export default Todoitems
