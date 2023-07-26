// Your code here
const Form = (newFood, setNewFood) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("this is the event", event);
    setNewFood("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            name="name"
            type="text"
            value="Pizza"
            onChange={(event) => setNewFood(event.target.value)}
          />
        </label>
        <label>
          Image
          <input name="image" type="text" />
        </label>
        <label>
          Calories
          <input name="calories" type="number" />
        </label>
        <label>
          Servings
          <input name="servings" type="number" />
        </label>
        <button type="submit">Create</button>
      </form>
    </>
  );
};

export default Form;
