
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import ShopCategory from './pages/ShopCategory';
import LoginSignUp from './pages/LoginsignUp';
import Shop from './pages/Shop';
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Footer from './components/Footer/Footer';
import men_banner from './components/Assets/banner_mens.png';
import women_banner from './components/Assets/banner_women.png';
import kid_banner from './components/Assets/banner_kids.png';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner = {men_banner} category="men"/>}/>
        <Route path='/womens' element={<ShopCategory banner ={women_banner} category="women" />}/>
        <Route path='/kids' element={<ShopCategory banner = {kid_banner} category="kid" />} />
        <Route path="/product" element={<Product/>} >
          <Route path= ':productId' element={<Product/>}/>
        </Route>
             <Route path='/cart' element={<Cart/>}/>
             <Route path='/login' element={<LoginSignUp/>}/>


        
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
