
import JeweleryCategory from "../JeweleryCategory/JeweleryCategory";
import MensClothingCategory from "../MensClothingCategory/MensClothingCategory";
import NewProducts from "../NewProducts/NewProducts";
import PopularProducts from "../PopularProducts/PopularProducts";
function Home() {
   return <div>
       <h1>Welcome</h1>
       <JeweleryCategory />
       <MensClothingCategory />
       <PopularProducts />
       <NewProducts />
   </div> 
}

export default Home;