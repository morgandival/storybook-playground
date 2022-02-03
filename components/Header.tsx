import React from 'react';
import Button from '../components/Button';

// @ts-ignore
const Header = ({ backgroundColor }) => {
  const style = {
    backgroundColor: backgroundColor
  };

  return (
    <header style={style}>
      <h1>This is a header!</h1>
      <Button
        label="Get lost!"
        backgroundColor="purple"
        size="sm"
        onClick={() => console.log('Clicked')}
      />
    </header>
  );
};

export default Header;
