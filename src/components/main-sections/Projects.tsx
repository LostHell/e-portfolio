import * as React from 'react';
import laptop from '../../images/laptop-mockup.png';
import google from '../../images/projects/google.png';

export const ProjectsSection = (props) => {
  return (
    <article
      id="projects"
      className={`${props.article === 'projects' ? 'active' : ''} ${
        props.articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >

      <h2 className="major">Projects</h2>
      <h3>Content coming soon...!!</h3>
      <div className="project">
        <img src={laptop} className="laptop-image" alt="Laptop.." />
        <img src={google} className="project-image" alt="Google project" />
      </div>
      {props.close}
    </article>
  );
};
