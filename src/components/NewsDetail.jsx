import React from "react";
import {useParams } from "react-router-dom";
import News from "./NewsData.json"
import { useEffect } from "react";



const NewsDetail = () =>
{
    const {id} = useParams();
    useEffect(() => {
        window.scrollTo(0, 0);
      });

    return(
        < >
        {
      

            News.filter(News => String(News.id) === String(id)).map(News=>{
                return (
                    <div class="container-fluid py-3" key={News.id}  >
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="position-relative mb-3">
                                  
                                    <div class="overlay position-relative bg-light">
                                        <div class="mb-3">
                                            <a href="/#">{News.Category}</a>
                                            <span class="px-1">/</span>
                                            <span>{News.Date}</span>
                                        </div>
                                        <div>
                                            <h3 class="mb-3">{News.Description}</h3>
                                         
                                            <h4 class="mb-3">Est dolor lorem et ea</h4>
                                            <img class=" img-detail-news w-40 float-left mr-4 mb-2" src={require("./img/"+ News.Image )} alt="news" />
                                            <p>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor
                                                invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam
                                                lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor
                                                rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor
                                                sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at
                                                lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at
                                                sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam
                                                dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna
                                                sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et
                                                duo tempor sea kasd clita ipsum et.</p>
                                         
                                      
                                        </div>
                                    </div>
                                </div>
                           
                            </div>
            
                        </div>
                    </div>
                </div>
                           
                )

            })
           

        }
    
    
        </>
    )
}
export default NewsDetail