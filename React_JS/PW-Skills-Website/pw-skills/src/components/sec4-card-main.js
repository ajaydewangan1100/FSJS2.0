
import img1 from "../assets_PW/6384d4393bf26a001a510fcd.jpeg";
import img2 from "../assets_PW/636a86033bf26a001a49e485.jpeg";
import img3 from "../assets_PW/636cb9f23bf26a001a4a7239.jpeg";

import PurpleH1 from "./purple-h1";

function Sec4CardMain () {

    const card_Data = [
        {
            id:"e1",
            src:img1,
            name:"Dharmendra kumar Yadav",
            design:"Tredence Analytics,Data Analyst",
            about:"Hello everyone I am an undergraduate from SRM University. I got placed in the Tredence Analytics it is all because of the excellent course called full stack data scientist in the ineuron."
        },
        {
            id:"e2",
            src:img2,
            name:"Sai Krishna Ghorantla",
            design:" Biocube Matrics Pvt Ltd,Assistant Manager- Data Analyst",
            about:"I have studied from krish YouTube videos and ineuron, which helped me to understand the thorough concepts."
        },
        {
            id:"e3",
            src:img3,
            name:"Snil Ramesh Doddamani",
            design:" Epsilon,Statistician 2",
            about:"Hi All, I am a student of the NOV 2021 batch, I made a good decision by joining the Ineuron classes. A very big thank you to the entire ineuron team And special thanks to Krish Naik and Sudhanshu."
        }
    ]

    return (
        <div className="sec4-container-main">
            <PurpleH1 heading="Hall of fame" />
            <div className="sec4-cards-main">
                {
                    card_Data.map((d) => (
                        <div className="sec4-card" key={d.id}>
                            <img src={d.src} className="sec4-card-img"></img>
                            <h2 className="sec4-card-name">{d.name}</h2>
                            <p className="sec4-card-design">{d.design}</p>
                            <p className="sec4-card-about">{d.about}</p>
                            <a href="#" key={d.id}><i className="fa-brands fa-linkedin card4-linkedin"></i></a>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Sec4CardMain;
