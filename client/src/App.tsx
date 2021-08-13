import React from 'react';

import './App.css';
import { AddTodo } from './AddTodo';
import { Todos } from './Todos';

function App() {
  return (
    <div className="App">
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
