import * as React from 'react';

export const ContactSection = (props) => {
  return (
    <article
      id="contact"
      className={`${props.article === 'contact' ? 'active' : ''} ${
        props.articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <h2 className="major">Contact</h2>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="contact-form" value="contact" />
        <div className="field half first">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" required={true} />
        </div>
        <div className="field half">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required={true}/>
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="4" required={true} />
        </div>
        <ul className="actions">
          <li>
            <input type="submit" value="Send Message" className="special" />
          </li>
          <li>
            <input type="reset" value="Reset" />
          </li>
        </ul>
      </form>
      <ul className="icons">
        <li>
          <a
            href="https://www.facebook.com/Rebecca.Boeva"
            className="icon fa-facebook"
          >
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/rebecca_v_cr"
            className="icon fa-instagram"
          >
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/losthell"
            className="icon fa-github"
          >
            <span className="label">Github</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/losthell"
            className="icon fa-file-pdf-o"
          >
            <span className="label">CV</span>
          </a>
        </li>
      </ul>
      {props.close}
    </article>
  );
};
