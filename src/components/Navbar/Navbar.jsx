import React, {useState} from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
function Navbar() {
  const [navHeight, setnavHeight] = useState(false);
  const navigate =useNavigate();
  const gotoHome = () =>{
    navigate("/");
  };
  return (
    <>
      <nav className={navHeight ? "show nav": "nav"}>
        <div className="logo" onClick={()=> gotoHome()}>Luxe Living Rentals</div>
        <ul>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/villas">Manors</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <RxHamburgerMenu
          className="hamburger"
          onClick={() => setnavHeight(!navHeight)}
        />
      </nav>
    </>
  );
}

export default Navbar;
