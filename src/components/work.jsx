import React from 'react'
import "./work.css"

const work = () => {
  return (
     <div className="card-category-2">
            
            <span className="category-name" id ="work">projects</span><br/><br/>
            
            <ul>
                <li>
                    <div className="img-card iCard-style1">
                        <div className="card-content">
                            <div className="card-image">
                                <span className="card-title">Geritch restaurant</span>
                                <img src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt ="marina"/>
                            </div>
                            
                            <div className="card-text">
                                <p>
                                    Welcome to my web portfolio's restaurant landing page! Here, I showcase my skills and expertise in web design and development by creating a captivating online presence for a fictional restaurant.  
                                </p>
                            </div>
                            
                        </div>
                        
                        <div className="card-link">
                            <a href="https://mianomax03.github.io/marina/" title="visit site"><span>visit site</span></a>
                        </div>
                    </div>                    
                </li>
                <li>
                    <div className="img-card iCard-style1">
                        <div className="card-content">
                            <div className="card-image">
                                <span className="card-title">executive assistant</span>
                                <img src="https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=600" alt ="assist" />
                            </div>
                            
                            <div className="card-text">
                                <p>
                                The page features a clean and professional design to create a positive first impression. It includes a visually appealing header image that captures the essence of professionalism and efficiency.  
                                </p>
                            </div>
                            
                        </div>
                        
                        <div className="card-link">
                            <a href="https://mianomax03.github.io/executive-assist/" title="visit site"><span>visit site</span></a>
                        </div>
                    </div>                    
                </li>
                <li>
                    <div className="img-card iCard-style1">
                        <div className="card-content">
                            <div className="card-image">
                                <span className="card-title">youtubeclone</span>
                                <img src="https://img.freepik.com/free-psd/glowing-youtube-logo-realistic-3d-circle_125540-2096.jpg?size=626&ext=jpg" alt ="youtubeclone"/>
                            </div>
                            
                            <div className="card-text">
                                <p>
                                "YouTube Clone" is a web application that emulates the popular video-sharing platform, YouTube. With a similar user interface and functionality, this clone allows users to watch videos online.   
                                </p>
                            </div>
                            
                        </div>
                        
                        <div className="card-link">
                            <a href="https://mianomax03.github.io/youtubeclone/" title="visit site"><span>visit site</span></a>
                        </div>
                    </div>                    
                </li>
                </ul>
                </div> 
  )
}

export default work