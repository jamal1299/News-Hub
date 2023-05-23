import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { SearchContext } from './ContextForSearch';



const NavStyle = {
    width: "100%",
    maxWidth: "300px",
}
const Navbar = (props) => {
   
      const { searchValue, updateSearchValue } = useContext(SearchContext);

  const handleInputChange = (e) => {
    updateSearchValue(e.target.value);
  };

   
   

    return (
        <>
            <div className="container-fluid p-0 mb-3">
                <nav className="navbar navbar-expand-lg bg-light navbar-light py-2 py-lg-0 px-lg-5">
                    <a href="/#" className="navbar-brand d-block d-lg-none">
                        <h1 className="m-0 display-5 text-uppercase"><span className="text-primary">News</span>Room</h1>
                    </a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between px-0 px-lg-3" id="navbarCollapse">
                        <div className="navbar-nav mr-auto py-0">
                            <Link to="/" className="nav-item nav-link active">Home</Link>
                            <Link to="/category" className="nav-item nav-link">Categories</Link>
                            <Link to="/blog" className="nav-item nav-link">Blog</Link>
                            
                            <Link to="contact" className="nav-item nav-link">Contact</Link>
                        </div>
                        <div className="input-group ml-auto" style={NavStyle}>
                            <input type="text"
                                className="form-control"
                                placeholder="Keyword"
                            value={searchValue}
                            onChange={handleInputChange}
                               
                                
                            />
                            <Link to="/search-page" className='input-group-append' >
                            <div className=" input-group-text text-secondary">
                                <i
                                    className="fa fa-search"></i>
                            </div>
                            </Link>
                            
                           
                        
                         
                          
                            
                        </div>
                    </div>
                </nav>
              
            </div>
        </>
    )
}

export default Navbar