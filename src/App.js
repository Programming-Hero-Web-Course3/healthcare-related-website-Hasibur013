
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Slider from './Components/Slider/Slider';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Slider></Slider>
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
