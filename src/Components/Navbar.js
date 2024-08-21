import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Navbar = (props) => {
  const { show,setShow, handleInputChange, profile_pic } = props;

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 280) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  const navigate=useNavigate()
  return (
    <nav className={`nav_bar ${scroll ? "scroll" : ""}`}>
      <div className="left_nav_bar">
        <h1>ADAMIX</h1>
        <ul>
          <li>Home</li>
          <li>Movies</li>
          <li onClick={()=>setShow(!show)}>Add <i className="fa-solid fa-plus"></i></li>
        </ul>
      </div>

      <div className="right_nav_bar">
        <div className="search-box">
          <button className="btn-search">
            <i className="fas fa-search"></i>
          </button>
          <input
            type="text"
            className="input-search"
            placeholder="Type to Search..."
            onChange={handleInputChange}
          />
        </div>
        <i className="fa-solid fa-bell"></i>
        <span><img src={profile_pic}  alt="profile"/>
        <ol>
          <li>Account Settings</li>
          <li>Help Center</li>
          <li onClick={()=>navigate("/")}>Sign Out</li>
        </ol>
        </span>
      </div>
      
    </nav>
    
    
  );
  
};


export default Navbar;
