import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Form/Login/Login';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import AuthProvider from './Context/AuthProvider';
import Booking from './components/Booking/Booking';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import OurPackages from './components/OurPackages/OurPackages';
import OurTours from './components/OurTours/OurTours';
import TourBookingList from './components/TourBookingList/TourBookingList';
import AddTours from './components/Form/AddTours/AddTours';
import MyBooking from './components/MyBooking/MyBooking';

function App() {
  return (
    <div className="App" style={{ background: "#D7DBDD" }}>
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
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <Route exact path="/tours">
              <OurTours></OurTours>
            </Route>

            <PrivateRoute exact path="/addTour">
              <AddTours></AddTours>
            </PrivateRoute>

            <PrivateRoute exact path="/booking/:id">
              <Booking></Booking>
            </PrivateRoute>

            <PrivateRoute exact path="/manageList">
              <TourBookingList></TourBookingList>
            </PrivateRoute>

            <PrivateRoute exact path="/myBooking">
              <MyBooking></MyBooking>
            </PrivateRoute>

            <PrivateRoute exact path="/package">
              <OurPackages></OurPackages>
            </PrivateRoute>


            <Route exact path="/blogs">
              <Blog></Blog>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>

            <Route exact path="/contact">
              <Contact></Contact>
            </Route>

            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="*">
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
