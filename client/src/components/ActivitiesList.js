import { useState } from "react";
import Activity from "../components/Activity";

function ActivitiesList({ activities }) {

  const activitiesComponents = activities.map(activity => {
    return <Activity key={activity.id} activity={activity} />
  })

  // const [completed, setCompleted] = useState(false)

  return (
    <div className="cards">
      <h2>Things To Do: </h2>
      <li className="activities-list">{activitiesComponents}</li>
    </div>
  )
}

export default ActivitiesList;