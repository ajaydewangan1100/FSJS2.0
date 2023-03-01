
import img1 from "../assets_PW/63eb1ae1194b22195fe5d967.jpg";
import img2 from "../assets_PW/63a2f02d889943137f7ec85f.jpg";
import img3 from "../assets_PW/63a2ecf58899439c8d7ebdc6.jpg";

import PurpleH1 from "./purple-h1";

function Sec6CardMain () {
    
    const card6_Data = [
        {
            id:"e1",
            src:img1,
            heading:"Decode DSA with C++",
            name:"Sanket Singh",
            price:"₹2475.00"
        },
        {
            id:"e2",
            src:img2,
            heading:"Java with DSA And system design",
            name:"Priya Bhatia",
            price:"₹2975.00"
        },
        {
            id:"e3",
            src:img3,
            heading:"Full Stack Web Development",
            name:"Anurag Tiwari",
            price:"₹2975.00"
        }
    ]

return (
    <div className="sec5-container-main">
        <PurpleH1 heading="Affordable Programs" />
        <p className="sec5-heding-para">Find your favourite courses in pocket-friendly ways.</p>
        <div className="sec5-cards-main">
            {
                card6_Data.map((d) => (
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

export default Sec6CardMain;