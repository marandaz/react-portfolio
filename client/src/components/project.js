// * A single `Project` component that will be used multiple times on a single page 
import React from "react";
import projects from "../projects.json";

function ProjectItem() {
    const projectDisplay = projects.project.map((item) =>
    <div className="card col-md-3 mb-4 mx-2 bg-dark text-white" key={item.title}>
     <img src={process.env.PUBLIC_URL + '/' + item.thumbnail}  alt={item.title} />
    <div>
        <h5 > {item.title}</h5>
        <p > {item.about}</p>
    </div>
    <div className="card-footer d-flex justify-content-center">
        <a href={item.deployment} className="mx-2">Deployment</a> || 
        <a href={item.repo} className=""> Repository</a>
    </div>
</div>
)
return (
<div className="row d-flex justify-content-center">
    {projectDisplay}
</div>
)
};


export default ProjectItem;