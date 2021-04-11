import * as React from 'react';
import afterEffects from '../../images/svg/Ae.svg';
import illustrator from '../../images/svg/Ai.svg';
import inDesign from '../../images/svg/Id.svg';
import lightroom from '../../images/svg/Lr.svg';
import lightroomClassic from '../../images/svg/LrC.svg';
import premierePro from '../../images/svg/Pr.svg';
import photoshop from '../../images/svg/Ps.svg';
import xd from '../../images/svg/Xd.svg';

export const SkillsSection = (props) => {
  const [skills] = React.useState([
    {
      id: 1,
      title: 'Adobe AfterEffects',
      image: afterEffects,
    },
    {
      id: 2,
      title: 'Adobe Illustrator',
      image: illustrator,
    },
    {
      id: 3,
      title: 'Adobe InDesign',
      image: inDesign,
    },
    {
      id: 4,
      title: 'Adobe Lightroom',
      image: lightroom,
    },
    {
      id: 5,
      title: 'Adobe Lightroom Classic',
      image: lightroomClassic,
    },
    {
      id: 6,
      title: 'Adobe PremierePro',
      image: premierePro,
    },
    {
      id: 7,
      title: 'Adobe Photoshop',
      image: photoshop,
    },
    {
      id: 8,
      title: 'Adobe XD',
      image: xd,
    },
  ]);

  return (
    <article
      id="skills"
      className={`${props.article === 'skills' ? 'active' : ''} ${
        props.articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <h2 className="major">Skills</h2>
      <section className="skills-list">
        {skills.map((skill) => (
          <div key={skill.id} className="item">
            <img src={skill.image} alt={skill.title} title={skill.title} />
          </div>
        ))}
      </section>
      {props.close}
    </article>
  );
};
