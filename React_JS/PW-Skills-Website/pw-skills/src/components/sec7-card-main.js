import img1 from "../assets_PW/63a0ad31ff94e14fb832b423.jpg";
import img2 from "../assets_PW/63f6f3b4a9d3a25d2eb43ba3.jpg";
import img3 from "../assets_PW/63a0bfb680762882188f490b.jpg";

import PurpleH1 from "./purple-h1";

function Sec7CardMain () {
    
    const card7_Data = [
        {
            id:"e1",
            src:img1,
            heading:"Cracking the Coding Interview in Java - Foundations",
            name:"Vishva Mohan",
            price:"FREE"
        },
        {
            id:"e2",
            src:img2,
            heading:"Stock Market Fundamental",
            name:"Kanan Bahl",
            price:"FREE"
        },
        {
            id:"e3",
            src:img3,
            heading:"Business Analytics Foundations",
            name:"Gopal Sharma",
            price:"FREE"
        }
    ]

return (
    <div className="sec5-container-main">
        <PurpleH1 heading="Community Programs" />
        <p className="sec5-heding-para">Open to all pro-live classes on Youtube for free.</p>
        <div className="sec5-cards-main">
            {
                card7_Data.map((d) => (
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

export default Sec7CardMain;