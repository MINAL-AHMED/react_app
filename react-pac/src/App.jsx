import React from 'react';
import './App.css'
import Message from './Message/Message';
import 'bootstrap/dist/css/bootstrap.css';
import ListGroup from './Components/ListGroup';


function App() {
  return (
    <div className="App">
     <Message/>
     <ListGroup/>
    </div>
  )
}

export default App;
