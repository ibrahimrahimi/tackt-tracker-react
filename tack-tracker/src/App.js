import { useState } from 'react'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Tarvosa Report Customization',
      day: 'Nov 3rd at 12:00',
        reminder: true,
    },
    {
        id: 2,
        text: 'Login Page for Dashborad',
        day: 'Nov 5th at 12:00',
        reminder: true,
    }
  ]);

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
      <Header title={'React Task Tracker'}/>
      <AddTask onAdd={addTask}/>
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
