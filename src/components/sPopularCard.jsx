import React from 'react'


const imgStyle = {
    width: "100px",
    height: "100px",
    objectFit: "cover",
}
const height = {
    height: "100px",
}

const fontSize = {
    fontSize: "14px",
}
const SPopularCard = (props) => {
    return (
        <>
            <div className="d-flex mb-3">
                <img alt="" src={require("./img/" + props.img)} style={imgStyle} />
                <div className="w-100 d-flex flex-column justify-content-center bg-light px-3" style={height}>
                    <div className="mb-1" style={fontSize}>
                        <a href="/#">{props.category}</a>
                        <span className="px-1">/</span>
                        <span>{props.date}</span>
                    </div>
                    <a className="h6 m-0" href="/#">{props.title}</a>
                </div>
            </div>
        </>
    )
}

export default SPopularCard