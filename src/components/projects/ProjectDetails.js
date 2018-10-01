import React from "react";

const ProjectDetails = ({ match }) => {
  const { id } = match.params;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos neque,
            mollitia doloremque culpa quas adipisci provident ducimus officia
            quos obcaecati quam harum unde tempore omnis minus tempora ullam?
            Magni aperiam eveniet culpa aut maiores laboriosam quasi. Rem
            eveniet nisi, alias ipsam ipsa itaque beatae hic.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Jasen Pan</div>
          <div>1st Oct, 12am</div>
        </div>
      </div>
    </div>
  );
};
export default ProjectDetails;
