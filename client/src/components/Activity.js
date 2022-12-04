function Activity({ activity }) {

  return (
    <div className="card">
      <h2>{activity.name}</h2>
      <img className="activity-image" src={activity.image} alt={activity.name} />
      <h3>{activity.location}</h3>
      <h4>{activity.address}</h4>
    </div>
  )
}

export default Activity;