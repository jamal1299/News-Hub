import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SearchContext } from './ContextForSearch';
import News from "./NewsData.json"

const SearchResult = () => {

  const divFont = {
    fontSize: "13px",

  }
  const sliderImg = {
    width: "150px",
    height: "200px",
    objectFit: "cover",

  }
  const { searchValue } = useContext(SearchContext);


  return (
    <div>

      <div className="container-fluid">
        <div className="container ">
          <h1>Result For : {searchValue}</h1>
          <div className="row ">
            {
              News && News.filter(News => News.Description.toLowerCase().includes(searchValue.toLowerCase()) && searchValue !== "").map((News) => {
                return (
                  <>
                    <div className="col-lg-4 py-3">
                      <div className="" key={News.id}>
                        <img alt="" className="img-fluid w-100" src={require("./img/" + News.Image)} style={sliderImg} />
                        <div className="overlay position-relative bg-light">
                          <div className="mb-2" style={divFont}>
                            <Link to="/#">{News.Title}</Link>
                            <span className="px-1">/</span>
                            <span>{News.Date}</span>
                          </div>
                          <Link className="h4 m-0" to={`/NewsDetail/${News.id}`} >{News.Description}</Link>
                        </div>
                      </div>
                    </div>
                  </>
                )
              }
              )
            }



          </div>
        </div>
      </div>

    </div>
  );
};

export default SearchResult;
