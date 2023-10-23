import React, { Component } from "react";
// import Zmage from "react-zmage";
import Fade from "react-awesome-reveal";
import {FaGithub, FaLink} from "react-icons/fa"

let id = 0;
class Portfolio extends Component{
    render() {
        if (!this.props.data) return null;
        
        const projects = this.props.data.projects.map(function (projects){
          let projectImage = "images/portfolio/" + projects.image;
          let link1 = projects.url1;
          let link2 = projects.url2;
          return(
            <div key={id++} className="columns portfolio-item">
                <div className="item-wrap">
                    {/* <Zmage alt={projects.title} src={projectImage}/> */}
                    <img src={projectImage}></img>
                    <div style={{ textAlign: "center" }}>
                    <a href={link1}><button style={{ width:"100%", marginBottom:0, paddingBottom:0}}><FaGithub style={{fontSize:"xx-large"}}/></button></a>
                    <a href={link2}><button style={{ marginBottom:0, width:"100%"}}><FaLink style={{fontSize:"xx-large"}}/></button></a>
                    </div>
                    <div style={{ textAlign: "center" }}>{projects.title}</div>
                    
                </div>
            </div>
          );
        });


        return(
            <section id="portfolio">
                {/* <Fade left duration={1000} distance="40px"> */}
                    <div className="row">
                        <div className="">
                        {/* twelve columns collapsed */}
                            <h1>Check out some of my works</h1>
                            <div id="portfolio-wrapper" className=" s-bgrid-thirds cf">
                                {projects}
                            </div>
                            {/* classname bgrid-quarters   */}
                        </div>
                    </div>
                {/* </Fade> */}
            </section>
        )
    }
}

export default Portfolio;