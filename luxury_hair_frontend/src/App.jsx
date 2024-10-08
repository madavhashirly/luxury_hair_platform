import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';
import SingleProduct from './components/SingleProduct';
import Cart from './components/Cart';
import AuthPage from "./components/AuthPage.jsx";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Product />} />
                <Route path="/product/:id" element={<SingleProduct />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<AuthPage />} />
                
            </Routes>
        </Router>
    );
};

export default App;


