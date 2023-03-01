
import "./about.css";

import banner from "../assets_PW/hero3.png";
import sec1Img from "../assets_PW/ourmisison-bg.png";

import img1 from "../assets_PW/service-1.png";
import img2 from "../assets_PW/service-2.png";
import img3 from "../assets_PW/service-4.png";
import img4 from "../assets_PW/service-5.png";
import img5 from "../assets_PW/service-7.png";
import img6 from "../assets_PW/service-8.png";

import PurpleH1 from "./purple-h1.js"

function About() {

    const data = [
        {
            id:"e1",
            src:img1,
            heading:"Affordable online courses",
            desc:"Affordable online courses along with learning communities."
        },
        {
            id:"e2",
            src:img2,
            heading:"Best in Class/Industry Mentors",
            desc:"Mentors are Youtubers, digital entrepreneurs and content creators."
        },
        {
            id:"e3",
            src:img3,
            heading:"Experience Portal",
            desc:"A revolutionary self-paced experience portal."
        },
        {
            id:"e4",
            src:img4,
            heading:"Job Portal",
            desc:"An unparalleled job portal that rewards both recruiters and applicants."
        },
        {
            id:"e5",
            src:img5,
            heading:"On-Demand Courses",
            desc:"Provide on-demand courses across technologies like data science, machine learning, and AI."
        },
        {
            id:"e6",
            src:img6,
            heading:"Innovation Lab for Tech products",
            desc:"Product development at R&D lab with respect to robotics, drones, and customised products like electronic devices, AI on edge devices."
        },
        
    ];

    return(
        <div className="about-container">
            <div className="about-banner">
                <div className="banner-data">
                    <h1 className="banner-heading">About Us</h1>
                    <p>PW Skills is the result of a continual effort to exponentially increase the employability of every Indian, irrespective of their socioeconomic status. With accessibility and affordability being the support structure of high-quality, industry-relevant courses, PW Skills aims to empower professionals and students alike to either jumpstart their careers or leverage existing skills with new, future-driven upgrades that will help them realise their full potential.</p>
                </div>
            </div>
            <div className="sec1-about">
                <PurpleH1 heading="Our Mission"/>
                <p className="sec1-para-about">PW Skills' mission is to permeate through every student/professional's outlook towards jobs and change their attitude and perspective from “How Can I Do It?” to “Of Course I Can Do It”. We aim to do this by providing exceptional upskilling courses at affordable rates, while being tech-forward so anyone, anywhere can access and improve their ability to be successful in life.</p>
                <img src={sec1Img} className="sec1-img-about"></img>
            </div>
            <div className="sec2-about">
                <PurpleH1 heading="Our Services" />
                <div className="sec2-card-container">
                    {
                        data.map((d) => (
                            <div className="sec2-card" key={d.id}>
                                <img src={d.src}></img>
                                <div className="sec2-head-desc">
                                    <h3 className="sec2-hd-card">{d.heading}</h3>
                                    <p className="sec2-card-desc">{d.desc}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default About;