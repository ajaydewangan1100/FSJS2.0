
import img1 from "../assets_PW/63a2ecdd88994300d47eb9ad.jpg";
import img2 from "../assets_PW/63a2eb428899436daf7eb489.jpg";
import img3 from "../assets_PW/63a2ea7e8899438ee77eae5a.jpg";

import PurpleH1 from "./purple-h1";

function Sec5CardMain () {
    
    const card5_Data = [
        {
            id:"e3",
            src:img3,
            heading:"Data Science Masters",
            name:"Krish Naik",
            price:"₹2975.00"
        },
        {
            id:"e1",
            src:img1,
            heading:"Full Stack Web Development",
            name:"Anurag Tiwari",
            price:"₹2975.00"
        },
        {
            id:"e2",
            src:img2,
            heading:"Data Science Masters",
            name:"Krish Naik",
            price:"₹2975.00"
        },
        
    ]

return (
    <div className="sec5-container-main">
        <PurpleH1 heading="Popular Programs" />
        <p className="sec5-heding-para">Most in demand and watched by people.</p>
        <div className="sec5-cards-main">
            {
                card5_Data.map((d) => (
                    <div className="sec5-card" key={d.id}>
                        <img src={d.src} className="sec5-card-img"></img>
                        <h3 className="sec5-card-heading">{d.heading}</h3>
                        <div className="sec-5-name-price">
                            <p className="sec5-card-name">{d.name}</p>
                            <h4>{d.price}</h4>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
);
}

export default Sec5CardMain;
