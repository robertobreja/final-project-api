import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


function CategoryDetails() {
    const { categoryName } = useParams();
    const [currentCategoryProducts, setCurrentCategoryProducts] = useState([]);
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
            .then((res) => res.json())
            .then((categoryProducts) => {
                console.log(categoryProducts);
                setCurrentCategoryProducts(categoryProducts);
            });
    }, []);
    return (
        <div>
            <h1>{categoryName}</h1>
            <div className="row">
                {currentCategoryProducts.map((product) => (
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

export default CategoryDetails;