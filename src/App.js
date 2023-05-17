import './App.css';
import React, { useRef } from 'react';
//components imported
import Header from './components/Header';
// import TodoForm from './components/TodoForm';
// import Todos from './components/Todos';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<Login/>}></Route>
        <Route path='/todo' element={<Header/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
      </BrowserRouter>   
       </div>
  );
}

export default App;
