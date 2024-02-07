import React from "react";
import logo from "../../Assets/logo.png"

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <aside>
      <img src={logo} className="max-w-sm rounded-lg shadow-2xl w-1/2" />
        <p>
          Food Panda Industries Ltd.
          <br />
          Providing reliable tech since 2024
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">All Foods</a>
        <a className="link link-hover">Add Foods</a>
      </nav>
    </footer>
  );
};

export default Footer;
