import * as React from 'react';
import girlEyesWink from '../../images/svg/winking_eye.svg';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import { graphql, useStaticQuery } from 'gatsby';

export const AboutSection = (props) => {
  const intl = useIntl();
  const { site } = useStaticQuery(graphql`
    query AboutSectionQuery {
      site {
        siteMetadata {
          author {
            phoneBG
            phoneDE
            email
          }
        }
      }
    }
  `);

  return (
    <article
      id="about"
      className={`${props.article === 'about' ? 'active' : ''} ${
        props.articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <h2 className="major">
        <FormattedMessage id="about.headline" />
      </h2>
      <div className="image main">
        <img src={girlEyesWink} alt="Winking eyes." />
      </div>
      <p>
        <FormattedMessage id="about.more_info" />
      </p>
      <p>
        <FormattedMessage id="about.more_info_additional" />
      </p>

      <h3>
        <FormattedMessage id="about.get_in_touch.headline" />
      </h3>
      <p>
        <FormattedMessage id="about.get_in_touch.open_for_work" />
      </p>
      <div>
        <a
          href={`tel:${site.siteMetadata.author.phoneBG}}`}
        >
          {site.siteMetadata.author.phoneBG}
        </a>
      </div>
      <div>
        <a
          href={`tel:${site.siteMetadata.author.phoneDE}`}
        >
          {site.siteMetadata.author.phoneDE}
        </a>
      </div>
      <div>
        <a
          href={`maito:${site.siteMetadata.author.email}?subject=${intl.formatMessage({
            id: 'about.contact_data.email.subject',
          })}`}
        >
          {site.siteMetadata.author.email}
        </a>
      </div>
      {props.close}
    </article>
  );
};
