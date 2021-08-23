import Button from './Button'
import AddMeal from './AddMeal'
import Meal from "./Meal"

const Meals = ({ addMeal, onAdd, showAdd, meals, addMealToWp }) => {

    return (
        <div>
            <input type='text' label='filter' placeholder='filter' />
            <Button text='Add Meal' onClick={onAdd}  />
            {showAdd && <AddMeal addMeal={addMeal} />}


            {meals.map((meal) => (
                <Meal key={meal.id} meal={meal} addMealToWp={addMealToWp} />
            ))}
        </div>
    );
};

export default Meals;