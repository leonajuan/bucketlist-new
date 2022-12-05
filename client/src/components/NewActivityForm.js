import { useState } from "react";
import ActivitiesList from "./ActivitiesList";

function NewActivityForm() {

  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [location, setLocation] = useState("")
  const [address, setAddress] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    fetch("/activities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: name,
        image: image,
        location: location,
        address: address
      })
    })
      .then(res => res.json())
      .then(newActivity => {
        console.log(newActivity)
      })
  }

  return (
    <>
      <h3 className="form-header">Add a New Activity</h3>
      <div className="form-div">
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="name">Activity</label>
          <input type="text" name="name" placeholder="activity name" value={name} onChange={(e) => setName(e.target.value)} />
          <label htmlFor="image">Image</label>
          <input type="text" name="image" placeholder="image url" value={image} onChange={(e) => setImage(e.target.value)} />
          <label htmlFor="location">Location</label>
          <input type="text" name="location" placeholder="location" value={location} onChange={(e) => setLocation(e.target.value)} />
          <label htmlFor="address">Address</label>
          <input type="text" name="address" placeholder="location address" value={address} onChange={(e) => setAddress(e.target.value)} />
          <button>Submit</button>
        </form>
      </div>
    </>
  )
}

export default NewActivityForm;