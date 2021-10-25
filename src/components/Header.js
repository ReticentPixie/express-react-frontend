// ========== IMPORT DEPENDENCIES ==========
import { Link } from 'react-router-dom'

// ========== Define the function that is the Component ==========
// ----- be sure to declare props -----
const Header = (props) => {
    // ----- RETURN some JSX -----
    return (
        <header className='Header'>
            <Link to='/'>
                <div>People App</div>
            </Link>
        </header>
    )
}

// ========== EXPORT the COMPONENT ==========
export default Header;