import './App.css';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SingleTeamShow from './components/SingleTeamShow/SingleTeamShow';
import Header from './components/Header/Header';
import SingleTeam from './components/SingleTeam/SingleTeam';
import NoMatch from './components/NoMatch/NoMatch';
import Header2 from './components/Header2/Header2';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Home />
          </Route>
          <Route path="/team/:idTeam">
            <SingleTeam />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
