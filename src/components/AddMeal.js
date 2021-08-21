import { useState } from "react";

const AddMeal = () => {
    // SET STATE VARIABLES
    const [name, setName] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [category, setCategory] = useState('')
    const [country, setCountry] = useState('')
    const [link, setLink] = useState('')
    const [healthy, setHealthy] = useState('')


    const onSubmit = (e) => {

    }

    return (
        <form className='add-form'onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Meal Name</label>
                <input type='text' placeholder='Meal Name'
                       value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Ingredients</label>
                <textarea placeholder='Ingredients' for='ingredients'
                       value={ingredients} onChange={(e) => setIngredients(e.target.value)}>
                </textarea>
            </div>
            <div className='form-control'>
                <label>Category</label>
                <input type='text' placeholder='Category'
                       value={category} onChange={(e) => setCategory(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Country</label>
                <input type='text' placeholder='Country'
                       value={country} onChange={(e) => setCountry(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Link</label>
                <input type='text' placeholder='Link'
                       value={link} onChange={(e) => setLink(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Healthy</label>
                <input type='checkbox'
                       value={healthy} onChange={(e) => setHealthy(e.currentTarget.checked)}/>
            </div>

            <input type='submit' value='Save Meal' className='btn btn-block'/>
        </form>
    );
};

export default AddMeal;