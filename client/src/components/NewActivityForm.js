function NewActivityForm() {

  function handleSubmit(e) {
    e.preventDefault()
    console.log("submitting!")
  }

  return (
    <>
      <h3 className="form-header">Add a New Activity</h3>
      <div className="form-div">
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="name">Activity</label>
          <input type="text" name="name" placeholder="Activity Name" />
          <label htmlFor="image">Image</label>
          <input type="text" name="image" placeholder="Image URL" />
          <label htmlFor="location">Location</label>
          <input type="text" name="location" placeholder="Location" />
          <label htmlFor="address">Address</label>
          <input type="text" name="address" placeholder="Location Address" />
          <button>Submit</button>
        </form>
      </div >
    </>
  )
}

export default NewActivityForm;