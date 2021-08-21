import Button from "./Button";
import {Link} from "react-router-dom";

const Meal = ({ meal }) => {
    return (
        <div className='my-4'>
            <Link to={`/${meal.id}`}><h1>{meal.name}</h1></Link>
            <p>{meal.category}  {meal.country}</p>
            <p>{meal.healthy ? 'Healthy'  : <></>}</p>

            <Button text='Add to Weekly Plan'/>
        </div>
    );
};

export default Meal;