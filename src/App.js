import logo from './logo.svg';
import './App.css';
import Todosearch from './Components/Todosearch';
import Todo from './Components/Todo';

function App() {
  return (
    <div className="App">
     <h1>Todo-List</h1>
     <Todosearch/>
     <Todo/>
    </div>
  );
}

export default App;
