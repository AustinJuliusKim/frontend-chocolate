import React from 'react';

const Anchor = (props) => {
  const { text,href,className } = props;

  return (
    <a href={ href } className={className}>{ text }</a>
  )
}

export default Anchor;
