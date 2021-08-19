import Header from './components/Header'
import Meals from './components/Meals'
import WeeklyPlan from './components/WeeklyPlan'
import Cards from "./components/Cards";

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'


const App = () => {
    const [cards, setCards] = useState([])

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
            <Header />
            <Route path='/' exact render={() => ( <Cards cards={cards} /> )} />
            <Route path='/meals' exact render={() => ( <Meals /> )} />
            <Route path='/wp' exact render={() => ( <WeeklyPlan /> )} />
        </Router>
    );
};

export default App;