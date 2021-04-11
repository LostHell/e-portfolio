import * as React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import '../assets/scss/main.scss';

const Layout = ({ children, location }) => {
  let content;

  if (location && location.pathname === '/') {
    content = <div>{children}</div>;
  } else {
    content = (
      <div id="wrapper" className="page">
        <div>{children}</div>
      </div>
    );
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              siteTitle
              siteDescription
              siteKeywords
              siteRobots
            }
          }
        }
      `}
      render={({ site }) => (
        <>
          <Helmet
            title={site.siteMetadata.siteTitle}
            meta={[
              { name: 'description', content: site.siteMetadata.siteDescription },
              { name: 'keywords', content: site.siteMetadata.siteKeywords },
              { name: 'robots', content: site.siteMetadata.siteRobots }
            ]}
          >
            <html lang="en" />
          </Helmet>
          {content}
        </>
      )}
    />
  );
};

export default Layout;
