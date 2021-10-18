
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <Switch>
        <Route>
          
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
