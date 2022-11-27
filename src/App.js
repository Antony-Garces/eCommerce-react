
import './App.css';
import CheckoutPage from './components/CheckoutPage';
import Navbar from './components/Navbar';
import Products from './components/Products';
import { Routes } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import { Route } from 'react-router-dom';


function App() {
  return (
    
      <div className="App">
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/Checkout-page' element={<CheckoutPage/>}/>
            <Route path='/' element={<Products/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    
  );
}

export default App;
