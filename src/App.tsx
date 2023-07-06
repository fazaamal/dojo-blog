import {Navbar} from './components';
import {Home} from './pages';

// App is second highest compenent under root 
function App() {

  return (
    <>
      <div className="App">
        <Navbar />
        <div className="content">
          <Home />
        </div>
      </div>
    </>
  )
}

export default App
