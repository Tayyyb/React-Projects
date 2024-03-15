import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <footer
        className={
          isHomePage ? "homePage_footer otherPage_footer" : "otherPage_footer"
        }
      >
        <div className="container">
          <h4>HOME RENTALS</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni,
            delectus.
          </p>
          <ul>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to='/termsandconditions'>Terms and Conditons</Link>
            </li>
            <li>
              <Link to='/contact'>Conact</Link>
            </li>
          </ul>
        </div>
        <div className="container">
          <h4>Contact With US</h4>
          <p>+238765 788 90</p>
          <p>s@gmail.com</p>
          <p>All Rights Reserved </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
