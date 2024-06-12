import Navbar from './Navbar';
import Home from './Home';
import Todo from './ToDo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Story from './Story';
import CreateStory from './CreateStory';
import NotExists from './NotExists';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          < Navbar />
          <div className='content'>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/todo">
                < Todo />
              </Route>
              <Route exact path="/story/:id">
                < Story />
              </Route>
              <Route exact path="/createStory">
                < CreateStory />
              </Route>
              <Route path="*">
                <NotExists />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
