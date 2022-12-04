function NewActivityForm() {
  return (
    <div>
      <form>
        <h3>Add a New Activity</h3>
        <label htmlFor="name">Activity</label>
        <input type="text" name="name" placeholder="Activity Name" />
        <label htmlFor="image">Image</label>
        <input type="text" name="image" placeholder="Image URL" />
        <label htmlFor="location">Location</label>
        <input type="text" name="location" placeholder="Location" />
        <label htmlFor="address">Address</label>
        <input type="text" name="address" placeholder="Location Address" />
      </form>
    </div >
  )
}

export default NewActivityForm;