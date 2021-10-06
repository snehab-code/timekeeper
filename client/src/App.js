import { Switch, Route, Link } from 'react-router-dom'
import ThemeToggler from './pages/ThemeToggler'
import TimerList from './components/timers/TimerList'
import Timer from './components/timers/Timer'
import Home from './pages/homepage/Home'
import './App.css'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Link to="/"> Home </Link>
                <ThemeToggler />
            </header>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/timers" component={TimerList} />
                <Route path="/timers/:timerId" component={Timer} />
            </Switch>
        </div>
    )
}

export default App
