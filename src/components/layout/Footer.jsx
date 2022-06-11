import React from "react";

export default function Footer() {
  const footerYear = new Date().getFullYear();
  
  return <div className="footer">
      <p>Copyright &copy; {footerYear} All rights reserved</p>
  </div>;
}
