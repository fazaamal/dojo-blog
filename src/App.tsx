import {Navbar} from './components';
import {Home, Blog, Create} from './pages';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// App is second highest compenent under root 
function App() {

  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            {/* Switch component ensures only one component shown at a time */}
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/create">
                <Create />
              </Route>
              <Route path="/blog/:id">
                <Blog />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
