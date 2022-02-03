import React from 'react';

// @ts-ignore
const Button = ({ label, backgroundColor, size, onClick }) => {
  let scale = 1;
  if (size === 'sm') scale = 0.75;
  if (size === 'lg') scale = 1.25;

  const style = {
    backgroundColor: backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: 'none'
  };

  return (
    <button onClick={onClick} style={style}>
      {label}
    </button>
  );
};

export default Button;
