import React from 'react'
import SPopularCard from './sPopularCard'
const imgCover = {
    objectFit: "cover",
}

const fontSize = {
    fontSize: "14px",
}
const PopularCard = (props) => {
    return (
        <>
            <div className="col-lg-6">
                <div className="position-relative mb-3">
                    <img alt="" className="img-fluid w-100" src="img/news-500x280-2.jpg" style={imgCover} />
                    <div className="overlay position-relative bg-light">
                        <div className="mb-2" style={fontSize}>
                            <a href="/#">{props.category}</a>
                            <span className="px-1">/</span>
                            <span>{props.date}</span>
                        </div>
                        <a className="h4" href="/#">{props.title1}</a>
                        <p className="m-0">{props.title2}</p>
                    </div>
                </div>
                <SPopularCard category={props.inner_heading1} date={props.inner_date1} title={props.inner_title1} img={props.inner_img1} />
                <SPopularCard category={props.inner_heading2} date={props.inner_date2} title={props.inner_title2} img={props.inner_img2} />


            </div>
        </>
    )
}

export default PopularCard