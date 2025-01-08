import React from "react";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";

function Navbar() {
  return (
    <>
      <div className="nav-container">
        <div className="nav-first-part">
          <div className="nm">
            <FaArrowLeft />
          </div>
          <div className="nm">
            <FaArrowRight />
          </div>
          <div className="nm">
            <FaRegClock />
          </div>
          <div className="hi">
            <input type="text" placeholder="search here" />
          </div>
        </div>

        <div className="nav-second-part">
          <div className="free">Free</div>
          <div className="nm">
            <FaRegCircleQuestion />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
