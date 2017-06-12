import React from 'react';

import Anchor from './Anchor.js';

import './Navigation.css';

const Navigation = (props) => {
  return (
    <nav className="Navigation">
      <div className="Nav-main">
        <Anchor text={"Hello"} href={"#"} className={"Nav-link"} />
      </div>
    </nav>
  )
};

export default Navigation;
