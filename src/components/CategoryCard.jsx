import React from 'react'
import News from './NewsData.json'
import { useRef } from 'react'
import Carousel from 'react-multi-carousel'
import { Link } from 'react-router-dom'
const sliderImg = {
    objectFit: "cover",

}
const divFont = {
    fontSize: "13px",

}
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 2
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2
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

const CategoryCard = (props) => {
    const crowselRef = useRef(null);

    const nextBtnCard = () => {
        crowselRef.current.next();
    }
    const preBtnCard = () => {
        crowselRef.current.previous();
    }
    return (
        <div className="col-lg-6 py-3">
            <div className="bg-light py-2 px-4 mb-3">
                <div className="btn-header">
                <h3 className="m-0">{props.filter}</h3>                   
                <div className="arrow-btn-box">
                <span onClick={preBtnCard} className='fa fa-angle-left'></span>
                <span onClick={nextBtnCard} className='fa fa-angle-right'></span>
                </div>
                </div> 
               
            </div>
            <div className=" owl-carousel-3 carousel-item-2 position-relative">

                <Carousel responsive={responsive} arrows={false} ref={crowselRef} >
                    {
                        News.filter(News => News.Category === props.filter).map(News => {
                            return (
                                <div className="position-relative" key={News.id}>
                                    <img alt="" className="img-fluid w-100" src={require("./img/" + News.Image)} style={sliderImg} />
                                    <div className="overlay position-relative bg-light">
                                        <div className="mb-2" style={divFont}>
                                            <Link to="/#">{News.Title}</Link>
                                            <span className="px-1">/</span>
                                            <span>{News.Date}</span>
                                        </div>
                                        <Link className="h4 m-0" to={`NewsDetail/${News.id}`} >{News.Description}</Link>
                                    </div>
                                </div>

                            )
                        })
                    }

                </Carousel>

            </div>
        </div>
    )
}

export default CategoryCard