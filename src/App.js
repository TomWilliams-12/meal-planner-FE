import Header from './components/Header'
import Meals from './components/Meals'
import WeeklyPlan from './components/WeeklyPlan'
import Cards from "./components/Cards";

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'


const App = () => {
    const [cards, setCards] = useState([])
    const [meals, setMeals] = useState([])
    const [wp, setWp] = useState([])
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

    // ADD MEAL TO WEEKLY PLAN
    const addMealToWp = async (meal) => {
        const res = await fetch('http://localhost:8000/wp', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(meal)
            })
        const data = await res.json()
        setWp( [...wp, data])
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

    useEffect(() => {
        const getWeeklyPlan = async () => {
            const planFromServer = await fetchWeeklyPlan()
            setWp(planFromServer)
        }
        getWeeklyPlan()
    }, [])

    // GET MEALS FROM SERVER
    const fetchMeals = async () => {
        const res = await fetch('http://localhost:8000/meals')
        const data = await res.json()

        return data
    }

    // Fetch Cards FROM API
    const fetchCards = async () => {
        const res = await fetch('http://localhost:8000/cards')
        const data = await res.json()

        return data
    }

    const fetchWeeklyPlan = async () => {
        const res = await fetch('http://localhost:8000/wp')
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
                                                                  meals={meals}
                                                                  addMealToWp={addMealToWp} /> )} />
                <Route path='/wp' exact render={() => ( <WeeklyPlan weeklyPlan={wp} /> )} />
            </div>
        </Router>
    );
};

export default App;