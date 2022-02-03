import React, { EventHandler, MouseEventHandler } from 'react';
import Button from '../components/Button';

// @ts-ignore
const Header = ({ primary, backgroundColor }) => {
  const style = {
    backgroundColor: backgroundColor
  };

  return (
    <header style={style}>
      <h1>This is a header!</h1>
    </header>
  );
};

export default Header;
