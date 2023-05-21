import React, { useRef, useState } from 'react'
import PopularCard from './PopularCard'
import SPopularCard from './sPopularCard'


const Popular = (props) => {
    const [join,setJoin] = useState("");
    const email = useRef();
    const joining = ()=>{
        if(email.current.value !== "" && email.current.value.length > 5)
        {
            setJoin("Thank You For Joining ...");
        }else{
            setJoin("Please Enter email !");
            

        }
        
    }
    return (
        <>
            <div className="container-fluid py-3">
                <div className="container">
                    <div className="row">

                        {/* Left Side */}
                        <div className="col-lg-8">
                            <div className="row mb-3">
                                <div className="col-12">
                                    <div className="d-flex align-items-center justify-content-between bg-light py-2 px-4 mb-3">
                                        <h3 className="m-0">{props.heading1}</h3>
                                    
                                    </div>
                                </div>


                                <PopularCard category="Technology" date="January 01, 2045" title1="Est stet amet ipsum stet clita rebum duo" title2="Rebum dolore duo et vero ipsum clita, est ea sed duo diam ipsum, clita at justo, lorem amet vero eos sed sit..." inner_img1="news-100x100-1.jpg" inner_img2="news-100x100-2.jpg" inner_heading1="Sports" inner_heading2="Business" inner_date1="January 01, 2045" inner_date2="January 01, 2045" inner_title1="Lorem ipsum dolor sit amet consec adipis elit" innertitle2="Lorem ipsum dolor sit amet consec adipis elit" />

                                <PopularCard category="Technology" date="January 01, 2045" title1="Est stet amet ipsum stet clita rebum duo" title2="Rebum dolore duo et vero ipsum clita, est ea sed duo diam ipsum, clita at justo, lorem amet vero eos sed sit..." inner_img1="news-100x100-3.jpg" inner_img2="news-100x100-4.jpg" inner_heading1="Business" inner_heading2="Sports" inner_date1="January 01, 2045" inner_date2="January 01, 2045" inner_title1="Lorem ipsum dolor sit amet consec adipis elit" inner_title2="Lorem ipsum dolor sit amet consec adipis elit" />
                            </div>



                            <div className="row">
                                <div className="col-12 mt-2">
                                    <div className="d-flex align-items-center justify-content-between bg-light py-2 px-4 mb-3">
                                        <h3 className="m-0">{props.heading2}</h3>
                                        
                                    </div>
                                </div>
                                <PopularCard category="Technology" date="January 01, 2045" title1="Est stet amet ipsum stet clita rebum duo" title2="Rebum dolore duo et vero ipsum clita, est ea sed duo diam ipsum, clita at justo, lorem amet vero eos sed sit..." inner_img1="news-100x100-5.jpg" inner_img2="news-100x100-3.jpg" inner_heading1="Technology" inner_heading2="Business" inner_date1="January 01, 2045" inner_date2="January 01, 2045" inner_title1="Lorem ipsum dolor sit amet consec adipis elit" innertitle2="Lorem ipsum dolor sit amet consec adipis elit" />

                                <PopularCard category="Technology" date="January 01, 2045" title1="Est stet amet ipsum stet clita rebum duo" title2="Rebum dolore duo et vero ipsum clita, est ea sed duo diam ipsum, clita at justo, lorem amet vero eos sed sit..." inner_img1="news-100x100-1.jpg" inner_img2="news-100x100-2.jpg" inner_heading1="Sports" inner_heading2="Business" inner_date1="January 01, 2045" inner_date2="January 01, 2045" inner_title1="Lorem ipsum dolor sit amet consec adipis elit" innertitle2="Lorem ipsum dolor sit amet consec adipis elit" />
                            </div>
                        </div>
                        {/* Right Side  */}

                        <div className="col-lg-4 pt-3 pt-lg-0">

                            <div className="pb-3">
                                <div className="bg-light py-2 px-4 mb-3">
                                    <h3 className="m-0">Follow Us</h3>
                                </div>
                                <div className="d-flex mb-3">
                                    <a href="/#" className="d-block w-50 py-2 px-3 text-white text-decoration-none mr-2 fb-bg"  >
                                        <small className="fab fa-facebook-f mr-2"></small><small>12,345 Fans</small>
                                    </a>
                                    <a href="/#" className="d-block w-50 py-2 px-3 text-white text-decoration-none ml-2 tw-bg" >
                                        <small className="fab fa-twitter mr-2"></small><small>12,345 Followers</small>
                                    </a>
                                </div>
                                <div className="d-flex mb-3">
                                    <a href="/#" className="d-block w-50 py-2 px-3 text-white text-decoration-none mr-2 ld-bg" >
                                        <small className="fab fa-linkedin-in mr-2"></small><small>12,345 Connects</small>
                                    </a>
                                    <a href="/#" className="d-block w-50 py-2 px-3 text-white text-decoration-none ml-2 ig-bg" >
                                        <small className="fab fa-instagram mr-2"></small><small>12,345 Followers</small>
                                    </a>
                                </div>
                                <div className="d-flex mb-3">
                                    <a href="/#" className="d-block w-50 py-2 px-3 text-white text-decoration-none mr-2 yt-bg" >
                                        <small className="fab fa-youtube mr-2"></small><small>12,345 Subscribers</small>
                                    </a>
                                    <a href="/#" className="d-block w-50 py-2 px-3 text-white text-decoration-none ml-2 vm-bg" >
                                        <small className="fab fa-vimeo-v mr-2"></small><small>12,345 Followers</small>
                                    </a>
                                </div>
                            </div>

                            <div className="pb-3">
                                <div className="bg-light py-2 px-4 mb-3">
                                    <h3 className="m-0">Newsletter</h3>
                                </div>
                                <div className="bg-light text-center p-4 mb-3">
                                    <p>Aliqu justo et labore at eirmod justo sea erat diam dolor diam vero kasd</p>
                                    <div className="input-group inpo" >
                                        <input type="text" className="form-control form-control-lg" placeholder="Your Email" ref={email} />
                                        <div className="input-group-append">
                                            <button className="btn btn-primary c" onClick={joining}>Join</button>
                                        </div>
                                    </div>
                                    <small className='joining'>{join}</small>
                                </div>
                            </div>

                            <div className="mb-3 pb-3">
                                <a href="/#"><img className="img-fluid" src="img/news-500x280-4.jpg" alt="" /></a>
                            </div>

                            <div className="pb-3">
                                <div className="bg-light py-2 px-4 mb-5">
                                    <h3 className="m-0">Tranding</h3>
                                </div>

                                <SPopularCard category="Technology" date="January 01, 2045" title="Lorem ipsum dolor sit amet consec adipis elit" img="news-100x100-2.jpg" />

                                <SPopularCard category="Technology" date="January 01, 2045" title="Lorem ipsum dolor sit amet consec adipis elit" img="news-100x100-3.jpg" />

                                <SPopularCard category="Technology" date="January 01, 2045" title="Lorem ipsum dolor sit amet consec adipis elit" img="news-100x100-4.jpg" />

                                <SPopularCard category="Technology" date="January 01, 2045" title="Lorem ipsum dolor sit amet consec adipis elit" img="news-100x100-1.jpg" />


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Popular