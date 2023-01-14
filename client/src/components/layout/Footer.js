import React from "react";

const Footer = () => {
  return (
    <footer className="footer grey darken-4">
      <div className="container white-text">
        <div className="left">
          <h6>Copyright &copy; {new Date().getFullYear()}</h6>
        </div>
        <div className="right">
          <h6>
            Made by{" "}
            <a href="https://github.com/vivekiet22" target="_blank">
              <span className="blue-text">Vivek Maddeshiya</span>
            </a>
          </h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
