import React, {useState} from 'react';
import Todolist from './Todolist';

function App() {
 const [todos, setTodos] = useState([{id:1, name:'Todo 1', complete: true}])
  return (
    <>
     <Todolist todos={todos} />
     <input type="text" />
     <button>Add Todo</button>
     <button>Clear</button>
     <div>0 left to do</div>
    </>

  )
}

export default App;
