
import './App.css';
import CheckoutPage from './components/CheckoutPage';
import Navbar from './components/Navbar';
import Products from './components/Products';
import { Routes } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import { Route } from 'react-router-dom';
import SignIn from './components/Signin';
import SignUp from './components/Signup';


function App() {
  return (
    
      <div className="App">
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/Checkout-page' element={<CheckoutPage/>}/>
            <Route path='/' element={<Products/>}/>
            <Route path='/Signin' element={<SignIn/>}/>
            <Route path='/Signup' element={<SignUp/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    
  );
}

export default App;
