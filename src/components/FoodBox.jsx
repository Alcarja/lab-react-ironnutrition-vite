// Your code here

const FoodBox = ({
  name,
  calories,
  servings,
  imageUrl,
  foods,
  setFoods,
  id,
}) => {
  const deleteFood = (id) => {
    setFoods(foods.filter((food) => food.id !== id));
  };

  return (
    <div>
      <p>{name}</p>

      <img src={imageUrl} height={"150px"} />

      <p>Calories: {calories}</p>
      <p>Servings {servings}</p>

      <p>
        <b>Total Calories: {servings * calories} </b> kcal
      </p>

      <button onClick={() => deleteFood(id)}>Delete</button>
    </div>
  );
};

export default FoodBox;
