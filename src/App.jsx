import "./App.css";
import foodsJson from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/FoodBox";
import Form from "./components/AddFoodForm";
import SearchBar from "./components/SearchBar";

function App() {
  const [foods, setFoods] = useState(foodsJson);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <Form foods={foods} setFoods={setFoods} />

      {foods
        .filter((filterFood) => {
          if (
            filterFood.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return filterFood;
          }
        })
        .map((oneFood) => {
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
