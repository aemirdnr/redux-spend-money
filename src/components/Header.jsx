import React from "react";
import "../style.sass";

function Header() {
  return (
    <div className="header_box mt-4">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Warren_Buffett_at_the_2015_SelectUSA_Investment_Summit.jpg/1200px-Warren_Buffett_at_the_2015_SelectUSA_Investment_Summit.jpg" />
      <h1>Spend Warren Buffett's Money</h1>
    </div>
  );
}

export default React.memo(Header);
