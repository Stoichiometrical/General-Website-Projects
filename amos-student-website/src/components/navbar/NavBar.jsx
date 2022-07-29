import "./navbar.css"

export default function NavBar(){
    return(
        <>
            <div className="navContainer">
                <div className="navWrapper">
                     <img src="assets/logo.png" alt="" className="logo"/>
                      <div className="navListWrapper">
                          <ul className="navList">
                              <li className="navListItem"><a href="">Home</a></li>
                              <li className="navListItem"><a href="">Our Journey</a></li>
                              <li className="navListItem"><a href="">About</a></li>
                              <li className="navListItem"><a href="">Gallery</a></li>
                          </ul>
                      </div>
                       <button className=" apply">Apply Now</button>
                </div>
            </div>

        </>
    )
}