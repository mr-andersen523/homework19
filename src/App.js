import React, { useEffect, useState} from "react";
import axios from "axios";
import PersonsContext from "./components/personsContext";
import Table from "./components/Table";
import NavBar from "./components/NavBar"
import Jumbotron from "./components/Jumbotron";


//Used randomuser3 folder code to help figure out how to use API to populate table

function App() {
const [personsState, setPersonsState] = useState([]);

    // Axios get with setState example and state not explicitly declared
    useEffect(() => {
    axios.get(`https://randomuser.me/api/?results=200&nat=us`)
        .then(res => {
        const personsArr  = res.data.results;
        setPersonsState(personsArr);
        })
    }, [] );
    
    return (
    <PersonsContext.Provider value={personsState}>
    <div>
        <NavBar />
        <Jumbotron />
        <Table />
    </div>   
    </PersonsContext.Provider>     
    );
}

export default App;  
