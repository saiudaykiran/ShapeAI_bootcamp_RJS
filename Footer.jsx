import React from "react";

function Footer(){
  return(
   <footer>
     <p>Copyright Book Tickets @ {new Date().getFullYear()}</p>
   </footer>
  );
}

export default Footer;