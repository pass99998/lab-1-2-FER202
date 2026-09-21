import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import ProductList from "./components/ProductList";

function App() {
    return (
        <div>
            <Header />
            <div className="mt-4">
                <Banner />
            </div>
            <div className="mt-4">
                <ProductCard />
            </div>
            <div className="mt-4">
                <Footer />
            </div>
        </div>
    )
}

export default App;
