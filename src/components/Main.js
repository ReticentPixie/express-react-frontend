// ========== IMPORT DEPENDENCIES ==========
import { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// you can use Redirect to prevent someone from trying to reload the show page before the data is available
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

    // helper function to update a person whenever called
    // will take in a single person as an argument and return the people list with the updated person's info
    const updatePeople = async (person, id) => {
        // make PUT request to the API (concatonate the URL + id becuase on the backend the request is findByIdAndUpdate)
        await fetch(URL + id, {
            method: 'PUT',
            // this request does transfer data so it needs headers
            headers: {
                'Content-Type': 'Application/json',
            },
            // add the reques body (the stringified json of the updated person)
            body: JSON.stringify(person),
        });
        // call getPeople() to reset state with the latest version of people that also now includes updates made to any document
        getPeople();
    };

    // helper function to delete a person
    const deletePeople = async(id) => {
        // make 'DELETE' request
        await fetch(URL + id, {
            method: 'DELETE',
        });
        // call getPeople() to reset state with the latest version of people that also now includes updates made to any document
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
                    path='/people/:id'
                    render={(rp) => (
                        // render props or 'rp' for short 
                        // rp has 2 properties: history, location, match
                        // by spreading out the render props (...rp) you can avoid having to list out the props individually (e.g., history={rp.history} match={rp.match} etc.)
                        people.length ?
                            <Show 
                                // Show page needs access to 3 things - our people array and the updatePeople and deletePeople helper functions so pass those in as props
                                people={people}
                                updatePeople={updatePeople}
                                deletePeople={deletePeople}
                                {...rp} 
                            />
                        :
                        <Redirect to='/' />
                    )}
                />
                to 
                <Route to='/404'>
                    <div>
                        <h1>Page not Found</h1>
                        <Link to='/'>Go Back to Home Page</Link>
                    </div>
                </Route>
            </Switch>
        </main>
    );
}

// ========== EXPORT the COMPONENT ==========
export default Main;