import NotFound from '../src/Pages/NotFound/NotFound.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home.js';
import Booking from './Pages/Booking/Booking/Booking.js';
import Header from './Pages/Shared/Header/Header.js';
import Login from './Pages/Login/Login/Login.js';
import AuthProvider from './contexts/AuthProvider.js';
import PrivateRoute from './Pages/Login/Login/PrivateRoute/PrivateRoute.js';
import Footer from './Pages/Footer/Footer.js';


function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route exact path="/home">
              <Home></Home>
            </Route>

            <Route exact path="/login">
              <Login></Login>
            </Route>

            <PrivateRoute exact path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
