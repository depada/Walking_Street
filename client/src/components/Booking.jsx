import React, { useState } from "react";
import "../styles/Booking.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faMapMarker,
  faPhone,
  faCalendar,
  faClock,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

const Booking = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phoneNumber: "",
    event: "", // We'll store the selected event here.
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here.
    console.log(formData);
  };

  return (
    <div id="booking">
      <h2 style={{ marginTop: 0 }}>Booking</h2>
      <h3>Description</h3>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="hr-form-container">
          <div className="form-element">
            <label htmlFor="firstName">
              <FontAwesomeIcon icon={faUser} /> First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          <div className="form-element">
            <label htmlFor="lastName">
              <FontAwesomeIcon icon={faUser} /> Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
        </div>
        <div className="hr-form-container">
          <div className="form-element">
            <label htmlFor="email">
              <FontAwesomeIcon icon={faEnvelope} /> Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          <div className="form-element">
            <label htmlFor="address">
              <FontAwesomeIcon icon={faMapMarker} /> Address:
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
        </div>
        <div className="hr-form-container">
          <div className="form-element">
            <label htmlFor="phoneNumber">
              <FontAwesomeIcon icon={faPhone} /> Phone Number:
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          <div style={{ marginTop: "15px" }} className="form-element">
            <label htmlFor="event">
              <FontAwesomeIcon icon={faCalendar} /> Event:
            </label>
            <select
              id="event"
              name="event"
              value={formData.event}
              onChange={handleChange}
              required
              className="w-input"
            >
              <option value="">What is your requirement?</option>
              <option value="alcoholic-events">ALCOHOLIC EVENTS</option>
              <option value="non-alcoholic-events">NON ALCOHOLIC EVENTS</option>
              <option value="birthday-parties">BIRTHDAY PARTIES</option>
              <option value="family-parties">FAMILY PARTIES</option>
              <option value="get-togethers">GET-TOGETHERS</option>
              <option value="receptions">RECEPTIONS</option>
              <option value="movie-events">MOVIE EVENTS</option>
              <option value="press-meets">PRESS MEETS</option>
              <option value="pre-release-meets">PRE-RELEASE MEETS</option>
              <option value="success-meets">SUCCESS MEETS</option>
              <option value="festival-events">FESTIVAL EVENTS</option>
              <option value="surprise-parties">SURPRISE PARTIES</option>
              <option value="corporate-events">CORPORATE EVENTS</option>
              <option value="freshers-farewells">FRESHERS/FAREWELLS</option>
              <option value="food">FOOD</option>
              <option value="wide-range-of-culinary-delight">
                WIDE RANGE OF CULINARY DELIGHT
              </option>
              <option value="entertainment-facilities">
                ENTERTAINMENT FACILITIES
              </option>
              <option value="kids-play-area">KIDS PLAY AREA</option>
              <option value="axe-throwing">AXE THROWING</option>
              <option value="gun-shooting">GUN SHOOTING</option>
              <option value="vr-games">VR GAMES</option>
              <option value="crackers">CRACKERS</option>
              <option value="paper-blasts">PAPER BLASTS</option>
              <option value="cool-fires">COOL FIRES</option>
              <option value="led-display">
                LED DISPLAY FOR VIDEO, IMAGES, AND LIVE STREAMING
              </option>
              <option value="decorations">DECORATIONS</option>
              <option value="choreographers-for-the-events">
                CHOREOGRAPHERS FOR THE EVENTS
              </option>
              <option value="photography">PHOTOGRAPHY</option>
              <option value="sound-and-lighting">SOUND AND LIGHTING</option>
              <option value="marketing-team">MARKETING TEAM</option>
            </select>
          </div>
        </div>
        <div className="hr-form-container">
          <div className="form-element">
            <label htmlFor="date">
              <FontAwesomeIcon icon={faCalendar} /> Date:
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-input"
            />
          </div>

          <div className="form-element">
            <label htmlFor="time">
              <FontAwesomeIcon icon={faClock} /> Time:
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-input"
            />
          </div>
        </div>
        <div className="form-element">
          <label htmlFor="message">
            <FontAwesomeIcon icon={faComment} /> Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Booking;
