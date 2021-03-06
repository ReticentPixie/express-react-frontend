// ========== IMPORT DEPENDENCIES ==========
import { Link } from 'react-router-dom'

// ========== Define the function that is the Component ==========
// ----- be sure to declare props -----
const Header = (props) => {
    // ----- RETURN some JSX -----
    return (
        <header className='Header'>
            {/* Link tags allow us to perform client-side routing to avoid default page refresh */}
            {/* Link tags manipulate our browser's history or aka, "HTML history API" */}
            <Link to='/'>
                <div>People App</div>
            </Link>
        </header>
    )
}

// ========== EXPORT the COMPONENT ==========
export default Header;