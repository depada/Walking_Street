import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import "../styles/Contact.css";
import logo from "../assets/logo.jpg";
import Navbar from "./Navbar";

const Contact = () => {
  const address = "1010 Avenue, sw 54321, Chandigarh";

  const openGoogleMaps = () => {
    window.open(
      `https://www.google.com/maps?q=${encodeURIComponent(address)}`,
      "_blank"
    );
  };

  return (
    // <footer id="contact" className="footer-section">
    //   <div className="container">
    //     <div className="footer-cta pt-5 pb-5">
    //       <div className="row">
    //         <div className="single-cta">
    //           <FontAwesomeIcon icon={faMapMarkerAlt} color="#c1ac88" />
    //           <div className="cta-text">
    //             <h4>Find us</h4>
    //             <span onClick={openGoogleMaps}>{address}</span>
    //           </div>
    //         </div>
    //         <div>
    //           <div className="single-cta">
    //             <FontAwesomeIcon icon={faPhone} color="#c1ac88" />
    //             <div className="cta-text">
    //               <h4>Call us</h4>
    //               <span>
    //                 <a href="tel:9876543210">9876543210</a>
    //               </span>
    //             </div>
    //           </div>
    //         </div>
    //         <div>
    //           {/* <div className="single-cta">
    //             <i
    //               style={{ height: "10px" }}
    //               class="fa-brands fa-instagram"
    //             ></i>
    //             <div className="cta-text">
    //               <h4>Instagram</h4>
    //               <a
    //                 href="https://www.instagram.com/your_instagram_account"
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //               >
    //                 Instagram Account
    //               </a>
    //             </div>
    //           </div> */}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
    <div
      id="contact"
      className="contact"
      style={{
        display: "flex",
        flexDirection: "row",
        height: "190px",
        backgroundColor: "#335748",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <img
          style={{
            height: "180px",
            width: "180px",
            mixBlendMode: "multiply",
            marginLeft: "100px",
          }}
          src={logo}
          alt=""
        />
      </div>
      <Navbar />
      <div className="social-icons">
        <a href="">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
