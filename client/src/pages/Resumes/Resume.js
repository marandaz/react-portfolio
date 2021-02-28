import React from "react";
import Resumepdf from "./Resumepdf.pdf";
import resumeimg from "./resumeimg.png";
import Container from "../../components/container";

function Resume() {
    return (
        <Container className="row d-flex justify-content-center pt-5">
            <div >
               <div className="mb-3">
                <a
                    id="resumeLink"
                    href={Resumepdf}
                    target="_blank"
                    alt="Marandas resume"
                > Download Here </a>
                <br />
                </div>
                <div id="resumeDiv"  >
                    <img id="resumeimage" src={resumeimg} alt="maranda resume"></img>
                </div>
            </div>
        </Container>
    )
};

export default Resume;