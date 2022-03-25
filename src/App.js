import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Products from "./Products/Products";
import ProductDetails from "./ProductDetails/ProductDetails";
import Cart from "./Cart/Cart";
import Categories from "./Categories/Categories";
import CategoryDetails from "./CategoryDetails/CategoryDetails";
import Contact from "./Contact/Contact";
import Thanks from "./Thanks/Thanks";
import Faq from "./Faq/Faq";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<Products />} />
                        <Route
                            path="/products/:productId"
                            element={<ProductDetails />}
                        />
                        <Route path="/categories" element={<Categories />} />
                        <Route
                            path="categories/:categoryName"
                            element={<CategoryDetails />}
                        />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/checkout" elemnet={<div>CheckOut</div>} />
                        <Route path="/thanks" element={<Thanks />} />
                        <Route path="/faq" element={<Faq />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<div>Not found</div>} />
                    </Routes>
                </div>
            </BrowserRouter>

            <footer className="container">© 2022 My Shop</footer>
        </div>
    );
}

export default App;
