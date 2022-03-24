import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Categories() {
    const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoriesWithImage, setCategoriesWithImage] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json));
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  useEffect(() => {
    if (categories.length && products.length) {
      const categoriesWithImages = categories.map((category) => {
        const productOfCategory = products.find(
          (product) => product.category === category
        );

        return { name: category, image: productOfCategory.image };
      });

      setCategoriesWithImage(categoriesWithImages);
    }
  }, [categories, products]);

  if (!categoriesWithImage.length) {
    return null;
  }

    
    
    return (
        <div>
            <h1>Categories</h1>
            <div className="row">
            {categoriesWithImage.map((category) => (
        <div key={category.name} className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-4" style={{ marginBottom: "1rem" }}>
            <Link className="card" to={`/categories/${category.name}`}>
            <div className="card-body">
          <p>{category.name}</p>
          </div>
          <div className="card-img-bottom">
          <img
            
            src={category.image}
            alt={category.name}
          />
          </div>
          </Link>
        </div>
      ))}
      </div>
        </div>
    );
}

export default Categories;
