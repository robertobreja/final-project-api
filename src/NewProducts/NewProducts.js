import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function NewProducts() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((allProducts) => {
                console.log(allProducts);
                setProducts(allProducts);
            });
    }, []);
    const newProducts = products.filter((product) => product.id < 17 && product.id > 12);
    return (
        <div>
            <h2>New Products</h2>
            <div className="row">
                {newProducts.map((product) => (
                    <div
                        key={product.id}
                        className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-4"
                    >
                        <Link className="card" to={`/products/${product.id}`}>
                            <div className="card-img-top">
                                <img
                                    src={product.image}
                                    className="card-img-top"
                                    alt="product"
                                />
                            </div>

                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>

                                <p className="card-text">
                                    {product.description}
                                </p>
                                <p className="card-text">{product.price} Lei</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NewProducts;