import React from "react";
import Sign_in from "../Login/Sign_in";
import Sign_up from "../Login/Sign_up";
function NavBar() {
  return (
    <div>
      <a>
        <Sign_in />
        <Sign_up />
      </a>
    </div>
  );
}

export default NavBar;
