
import './App.css';
//import Todo from './components/Todo';
import Todoform from './components/Todoform';
import TodoList from './components/TodoList';


function App() {
  return (
    <div className='todo-app'>
     <Todoform />
     <TodoList />
    </div>
  );
}

export default App;
