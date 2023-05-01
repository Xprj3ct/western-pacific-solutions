import React from "react";
import logo from "../../assets/Logo.png";

function Footer() {
  return (
    <footer className="footer p-10 md:p-28 md:text-lg bg-base-200 text-base-content font-semibold font-monserrat text-sm">
      <div className="flex flex-col -mt-10">
        <img className="w-32 m-0 p-0 mt-10" src={logo} alt="logo-image" />
        <p>
          <span className="uppercase text-[#059CE2] text-xl font-bold ">
            <span className="text-[#FE8D09]">Western</span> Pacific Solutions
          </span>
          <br />
          <p className="md:pr-0">
            <span>
              <h1 className="uppercase font-light">Port harcourt office</h1> 14,
              Orogbum Cresent old GRA, Port Harcourt.
            </span>
          </p>
          <p className="md:pr-0">
            <span>
              <h1 className="uppercase font-light">Lagos office</h1> 13, olalade
              kazeem Gernade Estate, Idimu, Lagos.
            </span>
          </p>
        </p>
      </div>
      <div className="uppercase">
        <span className="footer-title text-[#059CE2]">Explore</span>
        <a href="/About" className="link link-hover">
          Who we are
        </a>
        <a href="/Services" className="link link-hover">
          Services
        </a>
        <a className="link link-hover">
          faq<span className="lowercase">s</span>
        </a>
      </div>
      <div className="uppercase">
        <span className="footer-title text-[#059CE2]">Company</span>
        <a href="/Projects" className="link link-hover">
          Partners
        </a>
        <a href="/Contact" className="link link-hover">
          Contact
        </a>
        <a className="link link-hover">Customer support</a>
      </div>
      <div className="uppercase">
        <span className="footer-title uppercase text-[#2cbcff]">reach out</span>
        <a className="link link-hover">PH: 234-815-236-3717</a>
        <a className="link link-hover">PH: 234-8086-688-557</a>
        <a href="mailto:info@luckylumac.com" className="link text-blue-500 link-hover">
          info@pacificsolutions.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;
