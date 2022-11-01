import { useState } from 'react'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";

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
  ])

  return (
    <div className="container">
      <Header title={'React Task Tracker'}/>
      <Tasks tasks={tasks} />
      <Footer />
    </div>
  );
}

export default App;
