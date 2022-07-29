import "./about-section.css"

export default function AboutSection(){
    return(
        <>
            <div className="aboutContainer">
                <div className="aboutWrapper">
                    <div className="aboutNPic">
                        <h2 className="aboutTxt">ABOUT</h2>
                        <div className="box">
                            <div className="abox">
                                <img src="assets/n21.jpg" className="aboutImg" alt="Missing"/>
                            </div>
                        </div>
                    </div>

                    <div className="aboutParagraph">
                        <p className="ap1">rem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla ligula sed urna sagittis, eu placerat massa condimentum. Nulla rutrum odio in lectus vestibulum aliquet. Suspendisse quis leo nec risus consectetur sodales. </p>
                        <p className="ap2">
                            Etiam dictum, felis consequat convallis elementum, quam lacus ultrices sapien, non iaculis erat urna quis augue. Suspendisse ultrices, est at aliquet venenatis, lorem erat venenatis tellus, sit amet dignissim eros nisl ac lectus.
                            Donec ultricies a enim condimentum tempus. Curabitur hendrerit odio massa, in malesuada urna consectetur a. Nam ut efficitur dolor, in commodo ex. Proin fermentum risus sed sollicitudin posuere. Morbi non tristique nisi, at vestibulum dui. Sed eget lectus lacinia, placerat lacus vitae, semper ipsum. Nulla blandit turpis eu consectetur hendrerit
                        </p>
                </div>
            </div>

            </div>


        </>
    )
}