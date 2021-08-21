import Button from './Button'
import AddMeal from './AddMeal'

const Meals = ({ addMeal, onAdd, showAdd }) => {


    return (
        <div>
            <input type='text' label='filter' placeholder='filter' />
            <Button text='Add Meal' onClick={onAdd}  />
            {showAdd && <AddMeal />}

            {/* TODO list all meals in database */}
        </div>
    );
};

export default Meals;