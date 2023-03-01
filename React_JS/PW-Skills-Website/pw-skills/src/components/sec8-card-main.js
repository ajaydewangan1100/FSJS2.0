import img1 from "../assets_PW/neurolab-icon.svg";
import img2 from "../assets_PW/jobPortal-icon.svg";
import img3 from "../assets_PW/Internship-icon.svg";
import img4 from "../assets_PW/affilitatePortal-icon.svg";
import img5 from "../assets_PW/halloffame-icon.svg";

import PurpleH1 from "./purple-h1";

function Sec8CardMain () {
    
    const card8_Data = [
        {
            id:"e1",
            src:img1,
            heading:"PW Skills Lab",
            desc:"Supercharge your project development with our robust lab."
        },
        {
            id:"e2",
            src:img2,
            heading:"Job Portal",
            desc:"Use exceptional templates for a stand-out resume minus the sign up process."
        },
        {
            id:"e3",
            src:img3,
            heading:"Experience Portal",
            desc:"PW Skills's self-paced experience portal prioritises hands-on training with 570+ internship projects."
        },
        {
            id:"e4",
            src:img4,
            heading:"Become An Affiliate",
            desc:"Explore affiliate marketing opportunities with PW Skills and attain financial freedom."
        },
        {
            id:"e5",
            src:img5,
            heading:"Hall of Fame",
            desc:"Our student placements and 100K+ career transitions speak volumes about our courses."
        },
        
    ]

return (
    <div className="sec8-container-main">
        <PurpleH1 heading="Our Products" />
        <div className="sec8-cards-main">
            {
                card8_Data.map((d) => (
                    <a href="#" className="sec8-card" key={d.id}>
                        <img src={d.src} className="sec8-card-icon"></img>
                        <h2 className="sec8-card-heading">{d.heading}</h2>
                        <p className="sec8-card-desc">{d.desc}</p>
                    </a>
                ))
            }
        </div>
    </div>
);
}

export default Sec8CardMain;