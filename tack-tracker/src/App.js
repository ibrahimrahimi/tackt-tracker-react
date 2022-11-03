import { useState, useEffect } from 'react'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([]);

  // Fetch Tasks
  useEffect(() => {
    const fetchTasks = async() => {
      const res = await fetch('http://localhost:5000/tasks')
      const data = await res.json()

      console.log(data)
    }

    fetchTasks()
  }, [])

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 + 1)

    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // Toggle Tasks
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
      task.id === id ? {...task, reminder: !task.reminder} : task)
    )
  }

  return (
    <div className="container">
      <Header 
        title={'React Task Tracker'} 
        onAdd={() => setShowAddTask(!showAddTask)} 
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask  onAdd={addTask}/>}
      {tasks.length > 0 ?
        <Tasks
        tasks={tasks} 
        onDelete={deleteTask}
        onToggle={toggleReminder}
        />
         : <h3 className='notasks' style={{ alignItems: 'center'}}>No Tasks To Do </h3>}
      <Footer />
    </div>
  );
}

export default App;
