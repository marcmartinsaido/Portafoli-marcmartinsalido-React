import { FaHtml5, FaPhp, FaPython, } from "react-icons/fa";
import { VscTerminalBash } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io5";
import { SiPowershell } from "react-icons/si";
import { FaWindows } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";




export default function Navbar() {
    return (
        <div className="skills-main">
            <h1>My Skills</h1>
            <div className="card-grid-skills">
                <div className="Article-Skills">
                    <h3>programming languages</h3> 
                        <ul>
                            <li>
                                <FaHtml5 />
                            </li>
                            <li>
                                <FaPhp />
                            </li>
                            <li>
                                <FaPython  />
                            </li>
                            <li>
                                <VscTerminalBash />
                            </li>
                            <li>
                                <IoLogoJavascript />
                            </li>
                            <li>
                                <SiPowershell  />
                            </li>
                        </ul>
                </div>
                <div className="Article-Skills">
                    <h3>Os Skills</h3> 
                        <ul>
                                <li>
                                    <FaWindows />
                                </li>
                                <li>
                                    <FaLinux />
                                </li>
                                <li>
                                    <FaAndroid />
                                </li>
                            </ul>
                </div>
                <div className="Article-Skills">
                    <h3>To be continued....</h3> 
                </div>

            </div>
        </div>
    )
}