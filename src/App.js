
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Doctors from './Components/Doctors/Doctors';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import HaderMenu from './Components/HeaderMenu/HaderMenu';
import NotFound from './Components/NotFound/NotFound';
import Services from './Components/Services/Services';
import Slider from './Components/Slider/Slider';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Slider></Slider>
      <HaderMenu></HaderMenu>
      <Switch>
        <Route exact path="/">
         <Services></Services>
        </Route>
        <Route path="/services">
         <Services></Services>
        </Route>
        <Route path="/doctors">
          <Doctors></Doctors>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
