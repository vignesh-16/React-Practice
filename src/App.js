import Navbar from './Navbar';
import Home from './Home';
import Todo from './ToDo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Story from './Story';
import CreateStory from './CreateStory';
import NotExists from './NotExists';
import SignIn from './SignIn';
import SignUP from './SignUp';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          < Navbar />
          <div className='content'>
            <Switch>
              <Route exact path="/">
                <SignIn />
              </Route>
              <Route exact path="/signup">
                < SignUP />
              </Route>
              <Route exact path="/:user/home">
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
