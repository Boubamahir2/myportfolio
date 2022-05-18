import React from "react";
import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
// import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://twitter.com/amamahir">
      <BsTwitter />
    </a>
    {/* <a href="">
      <FaFacebookF />
    </a> */}
    <a href="https://github.com/Boubamahir2">
      <BsGithub />
    </a>
    <a href="https://www.linkedin.com/in/abubakar-mahir-home">
      <BsLinkedin />
    </a>
  </div>
);

export default SocialMedia;
