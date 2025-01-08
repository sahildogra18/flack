import React from "react";
import logo from "../assets/1042273490710_fe8e5d5c6c48b7d3dc73_88-removebg-preview.png";
import { RiHome5Fill } from "react-icons/ri";
import { FiMessageCircle } from "react-icons/fi";
import { FaBell } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { TbUserSquare } from "react-icons/tb";
import { CiCirclePlus } from "react-icons/ci";
import { FaHeadphonesAlt } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { BiSolidUserRectangle } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { MdLocationSearching } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
function HeroSection() {
  return (
    <>
      <div className="full-section">
        <div className="side-menu">
          <div className="one">
            <div>
              <img src={logo} alt="" />
            </div>

            <div className="hr">
              <div>
                <RiHome5Fill />
              </div>
              <div>Home</div>
            </div>

            <div className="hr">
              <div>
                <FiMessageCircle />
              </div>
              <div>DMs</div>
            </div>

            <div className="hr">
              <div>
                <FaBell />
              </div>
              <div>Notification</div>
            </div>

            <div className="hr">
              <div>
                <FaPlay />
              </div>
              <div>Automa...</div>
            </div>
          </div>

          <div className="sec-part">
            <div>
              <CiCirclePlus />
            </div>

            <div>
              <TbUserSquare />
            </div>
          </div>
        </div>

        <div className="chat-names">
          <div className="firstt-h">
            <div>
              <h3>RemoteIndian</h3>
            </div>
          </div>

          <div className="sec-h">
            <div>
              <FaHeadphonesAlt /> Huddles
            </div>
            <div>
              <FaRegArrowAltCircleRight /> Drafts & sent
            </div>
          </div>

          <div className="third-h">
            <div>
              <IoIosArrowDropdownCircle /> channels
            </div>
            <div># announcements</div>
            <div className="k"># book-club</div>
            <div className="k"># finance</div>
            <div className="k"># i-am-looking-for-a-job</div>
            <div className="k"># intro</div>
            <div className="k"># job-listings</div>
            <div className="k"># memes</div>
            <div className="k"># nomad</div>
            <div className="k"># our-work</div>
            <div className="k"># random</div>
            <div className="k"># tribe</div>
            <div># Browse all channels</div>
          </div>

          <div className="forth-h">
            <div>
              <IoIosArrowDropdownCircle /> Direct message
            </div>
            <div>
              <BiSolidUserRectangle /> Naman
            </div>
            <div>
              <BiSolidUserRectangle /> Sahil Dogra
            </div>
            <div className="k">
              <AiOutlineSearch /> invite people
            </div>
          </div>

          <div className="fifth-h">
            <div>
              <IoIosArrowDropdownCircle /> Apps
            </div>

            <div>
              {" "}
              <MdLocationSearching /> GreetBot
            </div>
            <div>
              <AiOutlineSearch /> add apps
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
