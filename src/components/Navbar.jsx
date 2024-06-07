import "./Navbar.css";
import { useState } from "react";


export default function Navbar() {
  const [menuState, setMenuState] = useState(false);

  const handleMenuClick = () => {
    setMenuState(!menuState);
  };

  return (
    <div>
      <nav>
      
      <div className="top">
      <div className="name">
        <p>Untitled UI</p> 
       </div>
       
        <ul className={menuState ? "open" : ""}>
          <li>Home</li>
          <li>Products <i class="fa-solid fa-chevron-down"></i></li>
          <li>Resources <i class="fa-solid fa-chevron-down"></i></li>
          <li>Pricing</li>
        </ul>
      </div>
        <><img src="https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="logo" className="logo" />
        <div className="menu" onClick={handleMenuClick}>
          <i className={menuState ? "fa-regular fa-circle-xmark" : "fa-solid fa-bars"}></i>
        </div></>
      </nav>
    </div>
  );
}
