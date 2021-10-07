import { Link } from 'react-router-dom'
import ThemeToggler from './ThemeToggler'

const Header = () => {
    return (
        <header className="App-header">
            <Link to="/"> Home </Link>
            {/* <a href="http://localhost:3010/auth/google">Sign in</a> */}
            <ThemeToggler />
        </header>
    )
}

export default Header
