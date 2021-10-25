// ========== IMPORT DEPENDENCIES ==========
import { useEffect, useState } from 'react';
import { Route, Switch} from 'react-router-dom';
import Index from '../pages/Index';
import Show from '../pages/Show';


// ========== Define the function that is the Component ==========
// ----- be sure to declare props -----
const Main = (props) => {
    const [people, setPeople] = useState(null);

    // const URL = 'http://localhost:3001/people/';    // development
    const URL = 'https://express-react-seir-project.herokuapp.com/people'   // for production

    const getPeople = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setPeople(data);
    }

    const createPeople = async (person) => {
        // make post request to create people
        await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json',
            },
            body: JSON.stringify(person),
        });
        // update list of people
        getPeople();
    };

    useEffect(() => getPeople(), []);

    // ----- RETURN some JSX -----
    return (
        <main>
            <Switch>
                <Route exact path='/'>
                    <Index people={people} createPeople={createPeople}/>
                </Route>
                <Route
                    path="/people/:id"
                    render={(rp) => (
                        // render props or 'rp' for short 
                        // rp has 2 properties: history, location, match
                        // by spreading out the render props (...rp) you can avoid having to list out the props individually (e.g., history={rp.history} match={rp.match} etc.)
                        <Show {...rp} />
                    )}
                />
            </Switch>
        </main>
    )
}

// ========== EXPORT the COMPONENT ==========
export default Main;