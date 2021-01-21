import './App.css';
import { useState } from 'react';
import AddTodo from './Components/AddTodo';
import List from './Components/List';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = item => {
    const newList = [...todos, item];
    setTodos(newList);
  }

  return (
    <div className="App">
      <AddTodo addTodo={addTodo} />
      <List todos={todos} />
    </div>
  );
}

export default App;
