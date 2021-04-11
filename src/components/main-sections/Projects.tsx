import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

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
        <StaticImage
          className="laptop-image"
          src="../../images/laptop-mockup.png"
          loading="lazy"
          width={1000}
          quality={95}
          formats={['auto', 'webp', 'avif']}
          alt="TODO laptop image"
        />
        <StaticImage
          className="project-image"
          src="../../images/projects/google.png"
          loading="lazy"
          width={1000}
          quality={95}
          formats={['auto', 'webp', 'avif']}
          alt="TODO project image"
        />
      </div>
      {props.close}
    </article>
  );
};
