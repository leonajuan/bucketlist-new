import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ActivitiesList from "./components/ActivitiesList";
import NewActivityForm from "./components/NewActivityForm";

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
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/new">
            <NewActivityForm />
          </Route>
          <Route path="/">
            <Header />
            <NavBar />
            <ActivitiesList activities={activities} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
