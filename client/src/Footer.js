import React from 'react';

import Anchor from './Anchor.js';

import './Navigation.css';

const Footer = (props) => {
  return (
    <footer className="Footer">
      <div className="Footer-main">
        <ul>
          <li>
            <Anchor text={"Hello"} href={"#"} className={"Nav-link"} />
          </li>
          <li>
            <Anchor text={"Hello"} href={"#"} className={"Nav-link"} />
          </li>
          <li>
            <Anchor text={"Hello"} href={"#"} className={"Nav-link"} />
          </li>
        </ul>
      </div>
    </footer>
  )
};

export default Footer;
