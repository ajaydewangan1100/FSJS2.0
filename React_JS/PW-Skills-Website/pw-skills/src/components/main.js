
import banner1 from "../assets_PW/web--NkF8yb.jpg"

import Sec2CardMain from "./sec2-card-main";
import Sec3CardMain from "./sec3-card-main";
import Sec4CardMain from "./sec4-card-main";
import Sec5CardMain from "./sec5-card-main";
import Sec6CardMain from "./sec6-card-main";
import Sec7CardMain from "./sec7-card-main";
import Sec8CardMain from "./sec8-card-main";

import PurpleH1 from "./purple-h1";


import "./main.css";

function Main () {
    return (
        <div>
            <div className="sec1-main">
                <img src={banner1} className="banner-main"></img> 
            </div>
            <div className="sec2-main">
                <div className="pure-hardwork-div">
                    <PurpleH1 heading="“Pure Hardwork, No Shortcuts!”"/>
                    <p className="line-yellow2"></p>
                </div>
                <div className="sec2-card-main">
                    <Sec2CardMain />
                </div>
            </div>
            <div className="sec3-main">
                <Sec3CardMain />
            </div>

            <div className="sec4-main">
                <Sec4CardMain />
            </div>

            <div className="sec5-main" key="sec5">
                <Sec5CardMain />
            </div>

            <div className="sec5-main" key="sec6">
                <Sec6CardMain />
            </div>

            <div className="sec5-main" key="sec7">
                <Sec7CardMain />
            </div>

            <div className="sec5-main" key="sec8">
                <Sec8CardMain />
            </div>
        </div>
    );
}

export default Main;