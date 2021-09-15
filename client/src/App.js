import { Switch, Route } from 'react-router-dom'
import TimerList from './components/timers/TimerList'
import Timer from './components/timers/Timer'
import './App.css'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Switch>
                    <Route exact path="/" component={TimerList} />
                    <Route path="/timers/:timerId" component={Timer} />
                </Switch>
            </header>
        </div>
    )
}

export default App
