
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
