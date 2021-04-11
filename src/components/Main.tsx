import * as React from 'react';
import { AboutSection } from './main-sections/About';
import { SkillsSection } from './main-sections/Skills';
import { ProjectsSection } from './main-sections/Projects';
import { ContactSection } from './main-sections/Contact';

export const Main = (props) => {
  const close = (
    <a
      tabIndex={0}
      role="button"
      className="close"
      onClick={() => {
        props.onCloseArticle();
      }}
    />
  );

  return (
    <div
      ref={props.setWrapperRef}
      id="main"
      style={props.timeout ? { display: 'flex' } : { display: 'none' }}
    >
      <AboutSection {...props} close={close} />
      <SkillsSection {...props} close={close} />
      <ProjectsSection {...props} close={close} />
      <ContactSection {...props} close={close} />
    </div>
  );
};
