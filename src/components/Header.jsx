import './Header.css'
import TodoForm from './TodoForm'
import Todos from './Todos';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
const navigate = useNavigate('')

 const handleClick = event=>{
    event.preventDefault()
    alert('You are logged out!!')
}

    return (
        <div id='header'>
        <nav><button className='btn btn-outline-danger logout' onClick={handleClick}><Link to='/'>Logout</Link></button></nav>
        <header>
            <h1 id='title'>TodoList</h1>
        </header>
        <TodoForm/>
        <Todos/>
        </div>
    )
}

export default Header;