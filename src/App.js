import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Featured from "./components/Featured";
import Categories from "./components/Categories";
import Popular from "./components/Popular";
import Footer from "./components/Footer";
import Contact from "./components/contact";
import SearchResult from "./components/SearchResult";
import './App.css'
import 'react-multi-carousel/lib/styles.css';
import '@fortawesome/fontawesome-free/css/all.css';
import {Routes,Route} from "react-router-dom";
import NewsDetail from "./components/NewsDetail";

function App() {

  return (
    <>
    <Routes>
        <Route index path="*" element={<>
        <Navbar  />
        <Slider />
        <Featured />
        <Categories />
        <Popular heading1 = "popular" heading2 = "Latest"/>
        <Footer />
         </>} />

         <Route path="/contact" element = {<><Navbar /> <Contact /> <Footer /> </>} />
         <Route path="/category" element = {<> <Navbar /><Popular heading1 = "Technology" heading2 = "Sports" /> <Footer /></>} />
         <Route path="/NewsDetail/:id" element = {<><Navbar /> <NewsDetail /> <Footer /></>} />
         <Route path="/search-page"  element ={<> <Navbar /> <SearchResult /> <Footer /> </>} />
    </Routes>
   
    
    
    </>
 
  );
}

export default App;
