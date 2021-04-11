import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

interface IProps {
  timeout: boolean;
}
export const Footer = ({ timeout }: IProps) => {
  const { site } = useStaticQuery(graphql`
    query SiteFooterQuery {
      site {
        siteMetadata {
          author {
            githubUsername
          }
        }
      }
    }
  `);

  const githubUsername = site.siteMetadata.author.githubUsername;

  return (
    <footer id="footer" style={timeout ? { display: 'none' } : {}}>
      <p className="copyright">
        &copy; Built with love by{' '}
        <a href={`https://www.github.com/${githubUsername}`}>{githubUsername}</a>
      </p>
    </footer>
  );
};
