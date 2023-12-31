
import './Projects.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import carcar from "./images/carcar.png"
import pawgress from "./images/pawgress.png"
import wardrobify from "./images/wardrobify.png"
import lunar from "./images/lunarlovers.png"

function Projects(){
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <>
        <div className="m-4" id="Projects" >
        <h1 className="header" style={{paddingBottom: "3rem", fontFamily: "Silkscreen", fontSize: "4rem"}}>My Projects</h1>


<div data-aos="fade-right" data-aos-duration="1500" className="row">
<div className="col-md-6 pb-5">
            <div className="card card">
            <a href="https://dahnaahn3.github.io/LunarLovers/" target="_blank" rel="noreferrer">
                <img className="card-img-top" src={lunar} alt=""/>
            </a>
            <div className="card-body">
                <div className="card-title card-title h5" style={{color: "black"}}>Lunar Lovers</div>
                <p className="card-text card-text" style={{color: "black"}}>
                Application to uncover the mysteries of the Chinese Zodiac and delve into
                the celestial wonders of your personality while exploring your compatibility with other signs. </p>
            </div>
            <div className="card-footer card-footer" style={{color: "black"}}>
                <small>React Native, Tailwind CSS, Javascript, Node.Js, Github Pages</small>
            </div>
            </div>
</div>
<div className="col-md-6">
            <div className="card card">
            <a href="https://pawgress.gitlab.io/pawgress/" target="_blank" rel="noreferrer">
                <img className="card-img-top" src={pawgress} alt=""/>
            </a>
            <div className="card-body">
                <div className="card-title card-title h5" style={{color: "black"}}>Pawgress</div>
                <p className="card-text card-text" style={{color: "black"}}>Full stack application to manage a dog hotel for both customers and owners</p>
            </div>
            <div className="card-footer card-footer">
                <small style={{color: "black"}}> FastAPI, React, PostgresSQL, Tailwind CSS, HTML, CSS, Python, Javascript </small>
            </div>
            </div>
</div>
<div className="col-md-6">
            <div className="card card">
            <a href="https://github.com/dahnaahn3/CarCar" target="_blank" rel="noreferrer">
                <img className="card-img-top" src={carcar} alt=""/>
            </a>
            <div className="card-body">
                <div className="card-title card-title h5" style={{color: "black"}}>CarCar App</div>
                <p className="card-text card-text" style={{color: "black"}}>A full-stack application for an automobile dealership</p>
            </div>
            <div className="card-footer card-footer">
                <small style={{color: "black"}}>Django, React, PostgresSQL, Bootstrap, Python, Javascript, CSS</small>
            </div>
            </div>
</div>



<div className="col-md-6">
            <div className="card card">
            <a href="https://gitlab.com/dahnaahn16/project-alpha-apr" target="_blank" rel="noreferrer">
                <img className="card-img-top" src={wardrobify} alt=""/>
            </a>
            <div className="card-body">
                <div className="card-title card-title h5" style={{color: "black"}}>Wardrobify</div>
                <p className="card-text card-text" style={{color: "black"}}>Organization application to keep optimal tracking of items in user's closet</p>
            </div>
            <div className="card-footer card-footer" style={{color: "black"}}>
                <small>Django, Python, Microservices, HTML, CSS, PostgresSQL</small>
            </div>
            </div>
</div>


</div>



        </div>

        </>
    )
}

export default Projects
