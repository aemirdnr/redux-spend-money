import React from "react";
import "../style.sass";

function Header() {
  return (
    <div className="header_box mt-4">
      <img src="src/images/buffett.jpg" />
      <h1>Spend Warren Buffett's Money</h1>
    </div>
  );
}

export default React.memo(Header);
