import React from "react";
import image1 from "../images/Xpert 2.png";
import image2 from "../images/Frame 72.png";
import image3 from "../images/V.png";
import image4 from "../images/Ellipse 27.png";
import image5 from "../images/Ellipse 28.png";
import image6 from "../images/Ellipse 29.png";
import image7 from "../images/Ellipse 41.png";
import image8 from "../images/Ellipse 31.png";
import "../App.css";
import { Link, useLocation } from "react-router-dom";
export const Steptwo = () => {
  return (
    <div className="steptwo">
      <div className="Header">
        <div className="lefthead seclefthead">
          <img src={image1} />

          <h2>Basic Information</h2>
          <h3>Documents Upload</h3>
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
            <div className="two2">
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
            <h3>Document Upload</h3>
            <div className="hrow1 ">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label class="form-check-label Na" for="inlineRadio1">
                  NABH
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label class="form-check-label Na" for="inlineRadio2">
                  NABL
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label class="form-check-label Na" for="inlineRadio2">
                  NA
                </label>
              </div>
              <div className="mb-1 Na">
                <label>Other</label>
                <br />
                <input type="text" />
              </div>
            </div>
            <br />
            <br />
            <h3>Hospital Registration</h3>
            <div className="hrow2">
              <div className="mb-6">
                <label>Certificate number*</label>
                <br />
                <input type="text" placeholder="..." />
              </div>
              <div className="mb-7 mb-11">
                <form>
                  <label>Date of Joining</label>
                  <br />
                  <input type="date" id="datepicker" name="datepicker" />
                </form>
              </div>
              <div className="mb-8">
                <label for="formFile" class="form-label">
                  Upload Certificates
                </label>
                <br />
                <input class="form-control" type="file" id="formFile" />
              </div>
            </div>
            <h3>Owner Doctor</h3>
            <div className="drow1">
              <div class="mb-3">
                <label for="formFile" class="form-label">
                  Upload Certificates
                </label>
                <br />
                <input class="form-control" type="file" id="formFile" />
              </div>
              <div className="mb-4">
                <label>Name*</label>
                <br />
                <input type="text" placeholder="..." />
              </div>
              <div className="mb-5">
                <label>Certificate number*</label>
                <br />
                <input type="text" />
              </div>
            </div>
            <div className="drow2">
              <div className="mb-6">
                <label>Specialization*</label>
                <br />
                <input type="text" />
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
export default Steptwo;
