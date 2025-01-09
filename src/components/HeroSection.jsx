import React from "react";
import logo from "../assets/1042273490710_fe8e5d5c6c48b7d3dc73_88-removebg-preview.png";
import { RiHome5Fill } from "react-icons/ri";
import { FiMessageCircle } from "react-icons/fi";
import { MdAdd } from "react-icons/md";
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
import { MdAddComment } from "react-icons/md";
import { LuFileStack } from "react-icons/lu";
import { MdOutlineAbc } from "react-icons/md";
import { FaBold } from "react-icons/fa";
import { FaItalic } from "react-icons/fa";
import { IoHourglassOutline } from "react-icons/io5";
import { IoSend } from "react-icons/io5";
import { BsMenuApp } from "react-icons/bs";
import { GrEmoji } from "react-icons/gr";
import { CiMicrophoneOn } from "react-icons/ci";
import { IoIosLink } from "react-icons/io";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { CiVideoOn } from "react-icons/ci";
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
            <div className="bn">
              <div>
                <FaHeadphonesAlt />
              </div>
              <div className="mn">Huddles</div>
            </div>

            <div className="bn">
              <div>
                <FaRegArrowAltCircleRight />
              </div>
              <div className="mn">Drafts & sent</div>
            </div>
          </div>

          <div className="third-h">
            <div className="bn">
              <div>
                <IoIosArrowDropdownCircle />
              </div>
              <div className="mn">div channels</div>
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
            <div className="mn"># Browse all channels</div>
          </div>

          <div className="forth-h">
            <div className="bn">
              <div>
                <IoIosArrowDropdownCircle />
              </div>
              <div className="mn">Direct message</div>
            </div>
            <div className="bn">
              <div>
                <BiSolidUserRectangle />
              </div>
              <div className="mn">Naman</div>
            </div>
            <div className="bn">
              <div>
                <BiSolidUserRectangle />
              </div>
              <div className="mn">Sahil Dogra</div>
            </div>
            <div className="k">
              <AiOutlineSearch /> invite people
            </div>
          </div>

          <div className="fifth-h">
            <div className="bn">
              <div>
                <IoIosArrowDropdownCircle />
              </div>
              <div className="mn">Apps</div>
            </div>

            <div className="bn">
              <div>
                <MdLocationSearching />
              </div>
              <div className="mn">GreetBot</div>
            </div>
            <div className="bn">
              <div>
                <AiOutlineSearch />
              </div>
              <div className="mn">add apps</div>
            </div>
          </div>
        </div>

        <div className="chat-line-container">
          <div className="villa">
            <div className="pehla-part">
              <div className="cv">
                <div>
                  <BiSolidUserRectangle />
                </div>
                <h2>Naman</h2>
              </div>

              <div className="duja-part">
                <div>
                  <FaHeadphonesAlt />
                </div>
                <div>
                  <IoIosArrowDropdownCircle />
                </div>
              </div>
            </div>
            <div className="astin">
              <div className="pb">
                <div>
                  <FiMessageCircle />
                </div>
                <div>Messages</div>
              </div>

              <div className="pb">
                <div>
                  <MdAddComment />
                </div>
                <div>Add canves</div>
              </div>

              <div className="pb">
                <div>
                  <LuFileStack />
                </div>
                <div>Files</div>
              </div>

              <div className="pb">
                <div>
                  <MdAdd />
                </div>
              </div>
            </div>
          </div>

          <div className="chat-boxing">
            <div className="qw">
              <div className="v">December 11th,2024 </div>
            </div>

            <div className="rtk">
              <div className="we">
                <TbUserSquare />
              </div>
              <div className="gh">
                <div>Naman 10:30 PM</div>
                <div>ok firebase lgaya?</div>
              </div>
            </div>

            <div className="rtk">
              <div className="we">
                <TbUserSquare />
              </div>
              <div className="gh">
                <div>Naman 10:30 PM</div>
                <div>ok firebase lgaya?</div>
              </div>
            </div>

            <div className="rtk">
              <div className="we">
                <TbUserSquare />
              </div>
              <div className="gh">
                <div>Sahil 10:40 PM</div>
                <div>la rea ji</div>
              </div>
            </div>

            <div className="rtk">
              <div className="we">
                <TbUserSquare />
              </div>
              <div className="gh">
                <div>Naman 11:30 PM</div>
                <div>apna ek project poora ho jana edda</div>
              </div>
            </div>

            <div className="rtk">
              <div className="we">
                <TbUserSquare />
              </div>
              <div className="gh">
                <div>Sahil 12:30 PM</div>
                <div>hnjj paaji thik ae</div>
              </div>
            </div>

            <div className="rtk">
              <div className="we">
                <TbUserSquare />
              </div>
              <div className="gh">
                <div>Naman 12:34 PM</div>
                <div>kro kro</div>
              </div>
            </div>
          </div>

          <div className="last">
            <div className="uno">
              <div>
                <FaBold />
              </div>

              <div>
                <FaItalic />
              </div>

              <div>
                <IoHourglassOutline />
              </div>

              <IoIosLink />
              <div>
                <BsMenuApp />
              </div>

              <div>
                <FaExpandArrowsAlt />
              </div>
            </div>

            <div className="dos">
              <div>
                <input type="text" placeholder="Message naman" />
              </div>
            </div>

            <div className="tres">
              <div className="cinco">
                <div>
                  <MdAdd />
                </div>

                <div>
                  <MdOutlineAbc />
                </div>

                <div>
                  <GrEmoji />
                </div>

                <div>
                  <CiVideoOn />
                </div>

                <div>
                  <CiMicrophoneOn />
                </div>
              </div>

              <div className="seven">
                <div>
                  <IoSend />
                </div>
                <div>
                  <IoIosArrowDropdownCircle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
{
  /*  */
}

export default HeroSection;
