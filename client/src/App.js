import { useEffect, useState } from "react";
import './App.css';
import Header from "./components/Header";
import ActivitiesList from "./components/ActivitiesList";

function App() {

  const [activities, setActivities] = useState([])

  useEffect(() => {
    fetch("/activities")
      .then(res => res.json())
      .then(activityData => {
        setActivities(activityData)
      })
  }, [])

  return (
    <div className="App">
      <Header />
      <ActivitiesList activities={activities} />
    </div>
  );
}

export default App;
