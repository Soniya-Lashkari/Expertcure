import React from "react";
import "../App.css";
import { Link, useLocation } from "react-router-dom";
import image1 from "../images/Xpert 2.png";
import image2 from "../images/Frame 72.png";
import image3 from "../images/V.png";
import image4 from "../images/Ellipse 27.png";
import image5 from "../images/Ellipse 28.png";
import image6 from "../images/Ellipse 29.png";
import image7 from "../images/Ellipse 30.png";
import image8 from "../images/Ellipse 31.png";
export const Stepone = () => {
  return (
    <div className="stepone">
      <div className="Header">
        <div className="lefthead">
          <img src={image1} />

          <h2>Basic Information</h2>
        </div>
        <div className="righthead">
          <img src={image2} />
          <img src={image3} />
        </div>
      </div>
      <div className="onemain">
        <div className="leftone">
          <p>Registration</p>
        </div>
        <div className="rightone">
          <div className="rightoneheader">
            <div className="one">
              <img src={image7} />
              <h1>Step</h1>
              <p>Basic Information</p>
            </div>
            <div className="two">
              {" "}
              <img src={image4} />
              <h1>Step</h1>
              <p>Documents upload</p>
            </div>{" "}
            <div className="three">
              <img src={image5} />
              <h1>Step</h1>
              <p>Add Facilities</p>
            </div>
            <div className="four">
              <img src={image6} />
              <h1>Step</h1>
              <p>Existing Insurance</p>
            </div>
            <div className="fife">
              <img src={image8} />
              <h1>Step</h1>
              <p>Declaration</p>
            </div>
          </div>
          <div className="rightdata">
            <h3>Hospital</h3>
            <div className="hrow1">
              <div className="mb-3">
                <label>Hospital Name*</label>
                <br />
                <input type="text" placeholder="Name" />
              </div>
              <div className="mb-4">
                <label>Mobile*</label>
                <br />
                <input type="text" placeholder="Number" />
              </div>
              <div className="mb-5">
                <label>Website add</label>
                <br />
                <input type="text" placeholder="Link" />
              </div>
            </div>
            <div className="hrow2">
              <div className="mb-6">
                <label>Address line 1*</label>
                <br />
                <input type="text" placeholder="..." />
              </div>
              <div className="mb-7">
                <label>Address line 2*</label>
                <br />
                <input type="text" placeholder="..." />
              </div>
              <div className="mb-8">
                <label>Address line 3</label>
                <br />
                <input type="text" placeholder="..." />
              </div>
            </div>
            <h3>Owner Doctor</h3>
            <div className="drow1">
              <div className="mb-3">
                <label> Name*</label>
                <br />
                <input type="text" placeholder="Name" />
              </div>
              <div className="mb-4">
                <label>Designation *</label>
                <br />
                <input type="text" placeholder="..." />
              </div>
              <div className="mb-5">
                <label>Mobile</label>
                <br />
                <input type="text" />
              </div>
            </div>
            <div className="drow2">
              <div className="mb-6">
                <label>Email</label>
                <br />
                <input type="email" />
              </div>
            </div>
            <div className="btn">
              <button>
                <Link to="/Second">
                  <p>Save and Next</p>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Stepone;
