import './App.css';
import AddService from './pages/AddService/AddService';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Header from './pages/Shared/Header/Header';
import Booking from './pages/Home/Booking/Booking/Booking';
import Login from './pages/Login/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import MyOrders from './pages/MyOrders/MyOrders';
import ManageAllOrders from './pages/ManageAllOrders/ManageAllOrders/ManageAllOrders';
import Footer from './pages/Shared/Footer/Footer';
import ContactUs from './pages/ContactUs/ContactUs';
import Services from './pages/Home/Services/Services';
import Approved from './pages/ManageAllOrders/Approved/Approved';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/"> <Home /> </Route>
            <Route exact path="/home"> <Home /> </Route>
            <Route exact path="/services"> <Services /> </Route>
            <Route exact path="/login"> <Login /> </Route>


            <Route exact path="/contactUs"> <ContactUs /> </Route>
            <Route exact path="/addService"> <AddService /> </Route>
            <PrivateRoute exact path="/users/:serviceId"> <Booking /> </PrivateRoute>
            <PrivateRoute exact path="/myOrders"> <MyOrders /> </PrivateRoute>
            <PrivateRoute exact path="/manageAllOrders"> <ManageAllOrders /> </PrivateRoute>
            <PrivateRoute exact path="/orders/update/:orderId"> <Approved /> </PrivateRoute>

            <Route exact path="*"> <NotFound /> </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
