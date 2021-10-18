
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route>
        <Navbar></Navbar>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
