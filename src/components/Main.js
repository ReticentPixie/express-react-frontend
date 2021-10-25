// ========== IMPORT DEPENDENCIES ==========
import { Route, Switch} from 'react-router-dom';
import Index from '../pages/Index';
import Show from '../pages/Show';


// ========== Define the function that is the Component ==========
// ----- be sure to declare props -----
const Main = (props) => {
    // ----- RETURN some JSX -----
    return (
        <main>
            <Switch>
                <Route exact path='/'>
                    <Index />
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