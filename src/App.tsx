import './App.css'
import Navbar from './Navbar';
import Home from './Home';

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
