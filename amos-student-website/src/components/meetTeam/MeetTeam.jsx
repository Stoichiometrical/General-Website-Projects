import "./meet-team.css"
import Images from "../image/Image";

export default function MeetTeam(){
    const details ={
        arasen:{
            name:"Arasen Parm",
            img:"assets/arasen.jpg",
            role:"Software Engineer",
        },
        david:{
            name:"David Gondo",
            img:"assets/david.jpg",
            role:"Software Engineer",
        },
        tiam:{
            name:"Augusta Tiam",
            img:"assets/tiam.jpg",
            role:"UX/UI Developer",
        },
        rokia:{
            name:"Nancy Rokia",
            img:"assets/rokia.jpg",
            role:"UX/UI Developer",
        },
        amos:{
            name:"Amos Kasumba",
            img:"assets/p3.jpg",
            role:"Software Engineer",
        },
        reggie:{
            name:"Reginald Okoko",
            img:"assets/p10.jpg",
            role:"UX/UI Developer",
        }
    }
    return(
        <>
            <div className="teamContainer">
                <div className="teamWrapper">
                    <span className="meetTxt">MEET THE TEAM</span>
                </div>
                <div className="teamSect">
                    <div className="tr1">
                        <Images img={details.david.img}  role={details.david.role}  name={details.david.name} />
                        <Images img={details.arasen.img}  role={details.arasen.role}  name={details.arasen.name} />
                        <Images img={details.tiam.img}  role={details.tiam.role}  name={details.tiam.name} />
                    </div>
                    <div className="tr2">
                        <Images img={details.amos.img}  role={details.amos.role}  name={details.amos.name} />
                        <Images img={details.rokia.img}  role={details.rokia.role}  name={details.rokia.name} />
                        <Images img={details.reggie.img}  role={details.reggie.role}  name={details.reggie.name} />
                    </div>
                </div>
            </div>
        </>
    )
}