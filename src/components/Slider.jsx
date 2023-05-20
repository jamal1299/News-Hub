import React from 'react'
import { Carousel } from 'react-bootstrap'
import News from './NewsData.json'
import { Link } from 'react-router-dom'



const sliderDiv2 = {
    height: "80px",
}
const sliderImg = {
    objectFit: "cover",

}

const Slider = () => {
    return (
        <>
            <div className="container-fluid py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <Carousel>
                                {
                                    News && News.filter(News => News.Slider === "Yes").map(News => {
                                        if (News.Slider === "Yes") {
                                            return (
                                                <Carousel.Item key={News.id}>
                                                    <div className='main-slider'>
                                                        <img
                                                            className="h-100 "
                                                            src={require("./img/" + News.Image)}
                                                            alt=""
                                                            style={sliderImg}
                                                        />
                                                    </div>

                                                    <Carousel.Caption>
                                                        <div className="text-left">
                                                            <div className="mb-1">
                                                                <a className="text-white" href="/#">{News.Title}</a>
                                                                <span className="px-2 text-white">/</span>
                                                                <a className="text-white" href="/#">{News.Date}</a>
                                                            </div>
                                                    
                                                            <Link className="h2 m-0 text-white font-weight-bold" to={`NewsDetail/${News.id}`} >{News.Description}</Link>
                                                        </div>
                                                    </Carousel.Caption>
                                                </Carousel.Item>

                                            )

                                        } else {
                                            return (
                                                <h1>404</h1>
                                            )
                                        }

                                    })
                                }


                            </Carousel>
                        </div>

                        <div className="col-lg-4">
                            <div className="d-flex align-items-center justify-content-between bg-light py-2 px-4 mb-3">
                                <h3 className="m-0">Categories</h3>
                                <a className="text-secondary font-weight-medium text-decoration-none" href="/#"> </a>
                            </div>
                            {
                                News.filter(News => News.Category === "All").map(News => {

                                    return (
                                        <div className="position-relative overflow-hidden mb-3" style={sliderDiv2} key={News.id}>
                                            <img alt="" className="img-fluid w-100 h-100" src={require("./img/" + News.Image)} style={sliderImg} />
                                            <a href="/#" className="overlay align-items-center justify-content-center h4 m-0 text-white text-decoration-none">
                                                {News.Title}
                                            </a>
                                        </div>
                                    )

                                })
                            }


                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Slider