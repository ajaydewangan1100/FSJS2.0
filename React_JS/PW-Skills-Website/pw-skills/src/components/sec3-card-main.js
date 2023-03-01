
import img1 from "../assets_PW/companies_icon/alcovex.png";
import img2 from "../assets_PW/companies_icon/amazon.png";
import img3 from "../assets_PW/companies_icon/apna.png";
import img4 from "../assets_PW/companies_icon/arka.png";
import img5 from "../assets_PW/companies_icon/ayoconnect.png";

import PurpleH1 from "./purple-h1";

function Sec3CardMain() {

    const icons = [
        {
            id:"e1",
            src: img1
        },
        {
            id:"e2",
            src: img2
        },
        {
            id:"e3",
            src: img3
        },
        {
            id:"e4",
            src: img4
        },
        {
            id:"e5",
            src: img5
        },
    ]

    return (
        <>
            <div className="pure-hardwork-div">
                    <PurpleH1 heading="Our Achiever's Work with"/>
                </div>
                <div className="sec3-comapny-icon">
                    {
                    icons.map((ic) => (
                        <img src={ic.src} className="company-icon" key={ic.id} />
                    ))
                    }
                </div>
        </>
    )
}


export default Sec3CardMain;