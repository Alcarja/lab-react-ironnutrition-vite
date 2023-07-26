import "./App.css";
import foodsJson from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/FoodBox";
import Form from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState(foodsJson);
  const [newFood, setNewFood] = useState("");

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <Form newFood={newFood} setNewFood={setNewFood} />

      {foods.map((oneFood) => {
        return (
          <FoodBox
            key={oneFood.id}
            id={oneFood.id}
            calories={oneFood.calories}
            servings={oneFood.servings}
            name={oneFood.name}
            imageUrl={oneFood.image}
            foods={foods}
            setFoods={setFoods}
          />
        );
      })}
    </div>
  );
}

export default App;
