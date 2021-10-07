import { Switch, Route } from 'react-router-dom'
import TimerList from './components/timers/TimerList'
import Timer from './components/timers/Timer'
import Home from './pages/homepage/Home'
import Header from './pages/header/Header'
import './App.css'

function App() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                {/* <Route exact path="/auth/google" component={GoogleSignin} /> */}
                <Route exact path="/timers" component={TimerList} />
                <Route path="/timers/:timerId" component={Timer} />
            </Switch>
        </div>
    )
}

export default App
