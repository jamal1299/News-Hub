import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import News from './NewsData.json'
import { Link } from 'react-router-dom';
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Featured = () => {
    return (
        <>
            <div className="container-fluid py-3">
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between bg-light py-2 px-4 mb-3">
                        <h3 className="m-0">Featured</h3>
                        <a className="text-secondary font-weight-medium text-decoration-none" href="/#">View All</a>
                    </div>

                    <Carousel responsive={responsive} className=''>
                        {News.filter(News => News.Category === "Featured").map(News => {
                            return (
                                <div key={News.id} >
                                    <div className="position-relative overflow-hidden secondcard" >
                                        <img alt="" className="img-fluid w-100 h-100" src={require("./img/" + News.Image)} />
                                        <div className="overlay newlay2">
                                            <div className="mb-1" >
                                                <Link className="text-white" to="/">{News.Title}</Link>
                                                <span className="px-1 text-white">/</span>
                                                <a className="text-white" href="/#">
                                                    {News.Date}</a>
                                            </div>
                                       
                                            <Link className="h4 m-0 text-white" to={`NewsDetail/${News.id}`}>{News.Description}</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Carousel>
                </div>
            </div>



        </>
    )
}

export default Featured