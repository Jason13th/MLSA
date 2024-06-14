import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";
import image from "../images/bg.jpg";
import meImage from "../images/ME.jpg"; // นำเข้ารูปภาพ ME.jpg

const imageAltText = "";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt="" />
      <div style={{ position: "absolute", top: "5rem", left: "2rem", width: "17rem" }}>
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "50%" }}>
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
      </div>
      {/* เพิ่มรูปภาพ ME.jpg ที่นี่ */}
      <div style={{ position: "absolute", bottom: "1rem", right: "1rem" }}>
        <img src={meImage} style={{ height: "20rem", width: "20rem", borderRadius: "50%" }} alt="Your description" />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
