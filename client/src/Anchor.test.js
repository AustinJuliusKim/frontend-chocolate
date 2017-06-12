import React from 'react';
import ReactDOM from 'react-dom';
import Anchor from './Anchor';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Anchor />, div);
});
