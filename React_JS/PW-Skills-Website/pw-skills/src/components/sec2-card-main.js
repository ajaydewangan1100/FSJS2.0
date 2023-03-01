

import img_first from "../assets_PW/books-icon.svg";
import img_second from "../assets_PW/student-icon.svg";
import img_third from "../assets_PW/credit-card-icon.svg";


function Sec2CardMain() {

    let data1 = [
        {
            id:"e1",
            src: img_first,
            count:"600",
            heading:"Different Courses"
        },
        {
            id:"e2",
            src: img_second,
            count:"700000",
            heading:"Students Enrolled"
        },
        {
            id:"e3",
            src: img_third ,
            count:"10000",
            heading:"Successful Transition"
        }
    ]

    return (
        <>
            {
                data1.map((d) => (
                <div className="sec2-card-inner" key={d.id}>
                    <img src={d.src} className="sec2-card-img"></img>
                    <h1 className="sec2-card-count"><span>{d.count}</span>+</h1>
                    <h1 className="sec2-card-heading"> {d.heading}</h1>
                </div>
                ))
            }
        </>
    )
}


export default Sec2CardMain;