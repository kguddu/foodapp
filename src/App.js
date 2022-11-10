
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home'
import Category from './components/Category'
import RandomMeal from './components/RandomMeal'
import Footer from './components/Footer'
import {BrowserRouter,Routes,Route} from 'react-router-dom'



function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/category" element={<Category/>}/>
        <Route path="/randommeal" element={<RandomMeal/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
       
    </div>
  );
}

export default App;
