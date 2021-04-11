import * as React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

interface IProps {
  onOpenArticle: Function;
  timeout: boolean;
}
export const Header = ({ onOpenArticle, timeout }: IProps) => (
  <header id="header" style={timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-diamond" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>
          <FormattedMessage id="header.owner_name" />
        </h1>
        <p>
          <FormattedMessage id="header.owner_short_description" />
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              onOpenArticle('about');
            }}
          >
            <FormattedMessage id="header.nav.about" />
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              onOpenArticle('skills');
            }}
          >
            <FormattedMessage id="header.nav.skills" />
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              onOpenArticle('projects');
            }}
          >
            <FormattedMessage id="header.nav.projects" />
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              onOpenArticle('contact');
            }}
          >
            <FormattedMessage id="header.nav.contact" />
          </button>
        </li>
      </ul>
    </nav>
  </header>
);
