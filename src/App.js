
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Details from './Components/Details/Details';
import Doctors from './Components/Doctors/Doctors';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import HaderMenu from './Components/HeaderMenu/HaderMenu';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Register from './Components/Register/Register';
import Services from './Components/Services/Services';
import Slider from './Components/Slider/Slider';
import AuthProvider from './context/authProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/details">
              <Details></Details>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
