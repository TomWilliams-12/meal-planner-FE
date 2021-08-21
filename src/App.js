import Header from './components/Header'
import Meals from './components/Meals'
import WeeklyPlan from './components/WeeklyPlan'
import Cards from "./components/Cards";

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'


const App = () => {
    const [cards, setCards] = useState([])
    const [meals, setMeals] = useState([])
    const [showAddMeal, setShowAddMeal] = useState(false)

    // ADD Meal
    const addMeal = async (meal) => {
        const res = await fetch('http://localhost:8000/meals', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(meal)
        })

        const data = await res.json()
        setMeals([...meals, data])
    }

    // GET MEALS FROM SERVER
    const fetchMeals = async () => {
        const res = await fetch('http://localhost:8000/meals')
        const data = await res.json()

        return data
    }

    useEffect(() => {
        const getMeals = async () => {
            const mealsFromServer = await fetchMeals()
            setMeals(mealsFromServer)
        }
        getMeals()
    }, [])


    useEffect(() => {
        const getCards = async () => {
            const cardsFromServer = await fetchCards()
            setCards(cardsFromServer)
        }
        getCards()
    }, [])


    // Fetch Cards FROM API
    const fetchCards = async () => {
        const res = await fetch('http://localhost:8000/cards')
        const data = await res.json()

        return data
    }


    return (
        <Router>
            <div className='md:container md:mx-auto' >
                <Header />
                <Route path='/' exact render={() => ( <Cards cards={cards} /> )} />
                <Route path='/meals' exact render={() => ( <Meals addMeal={addMeal}
                                                                  onAdd={() => setShowAddMeal(!showAddMeal)}
                                                                  showAdd={showAddMeal}
                                                                  meals={meals}/> )} />
                <Route path='/wp' exact render={() => ( <WeeklyPlan /> )} />
            </div>
        </Router>
    );
};

export default App;