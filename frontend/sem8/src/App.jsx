import { useState, useEffect } from 'react';
import './App.css'

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [canLoad, setCL] = useState(false);

  const addTask = () => {
    if (input !== '') {
      const newTask = {task: input, completed: false};
      setTasks([...tasks, newTask]);
      setInput('');
    }
  };

  const removeTask = (ind) => {
    const newTasks = tasks.filter((_,i)=> i !== ind);
    setTasks(newTasks);
  };

  const toggleCompl = (ind) => {
    const newTasks = tasks.map((task,i)=>i===ind ? {...task, completed: !task.completed} : task);
    setTasks(newTasks);
  };

  useEffect(()=>{
    const savedTasks = JSON.parse(localStorage.getItem('saved_tasks'));
    console.log(savedTasks);

    if (savedTasks) {
      setCL(true);
      setTasks(savedTasks);
    }
  }, []);

  useEffect(()=>{
    if (canLoad) {
      console.log("Updated 'tasks'")
      localStorage.setItem('saved_tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  return (
    <>

    <input
      type='text'
      value={input}
      onChange={(e)=>setInput(e.target.value)}
      placeholder='Nova task'
    / >
      <button onClick={addTask}>Adicionar Task</button>
    
      <div className='App'>
          <h1> Todolist </h1>

          <ul>
            {tasks.map((task, i) => (
              <li key={i} className='todo-item'>
                <span
                  className={task.completed ? 'completed' : ''}
                  onClick={()=> toggleCompl(i)}
                >
                  {task.task}

                </span>
                <button onClick={()=>removeTask(i)}>Remover Task</button>
              </li>
            ))}
          </ul>
      </div>

    </>
  )
}