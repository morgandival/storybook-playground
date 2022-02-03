import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Button from '../components/Button';

const Home: NextPage = () => {
  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <div className="">
      <p>This is the homepage yo!</p>
      <p>
        <Button
          label="CLICK ME"
          backgroundColor="#beb"
          size="lg"
          onClick={handleClick}
        />
      </p>
    </div>
  );
};

export default Home;
