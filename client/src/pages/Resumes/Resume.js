import React from "react";
import Resumepdf from "./Resume";
import resumeimg from "./Resume";

function Resume() {
    return (
        <div >
            <div>
                <a 
                    id="resumeLink"
                    href={Resumepdf}
                    target="_blank"
                    alt="Marandas resume" 
                > Download Here </a>
                
            </div>
            <div className="row" id="resumeDiv" >
                <img id="resumeimage" src={resumeimg} alt="maranda resume"></img>
            </div>
        </div>
    )
};

export default Resume;