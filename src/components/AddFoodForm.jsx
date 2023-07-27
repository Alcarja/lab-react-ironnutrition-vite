import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ foods, setFoods }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleAddFood = (event) => {
    event.preventDefault();
    const newFood = {
      name,
      image,
      servings,
      calories,
      id: uuidv4(), //We import a random id from v4 (because our new food doesn't have an Id)
    };
    setFoods([newFood, ...foods]);
    setName("");
    setImage("");
    setCalories(0);
    setServings(0); //This resets the form after using it
  };

  return (
    <>
      <form onSubmit={handleAddFood}>
        <label>
          Name
          <input
            // name="name"
            type="text"
            value={name}
            onChange={(event) => {
              setName(event.target.value); //The onchange method takes whatever we type and using setName updates our variable "name". Using this name we create a new object called newFood, and we add it to our array. We do this with each input and save the data into our four variables and states in the start of the page
            }}
          />
        </label>
        <label>
          Image
          <input
            // name="image"
            type="text"
            value={image}
            onChange={(event) => {
              setImage(event.target.value);
            }}
          />
        </label>
        <label>
          Calories
          <input
            // name="calories"
            type="number"
            value={calories}
            onChange={(event) => {
              setCalories(event.target.value);
            }}
          />
        </label>
        <label>
          Servings
          <input
            // name="servings"
            type="number"
            value={servings}
            onChange={(event) => {
              setServings(event.target.value);
            }}
          />
        </label>
        <button type="submit">Create</button>
      </form>
    </>
  );
};

export default Form;
