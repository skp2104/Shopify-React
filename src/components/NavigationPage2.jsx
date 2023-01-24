import React from 'react';
import { useNavigate } from '@shopify/app-bridge-react';
import { Link } from '@shopify/polaris';
import About from './About';

const NavigationPage2 = () => {
  return (
    <>
      <Link
        onClick={() => {
          navigate('https://my-app.com/about');
        }}
      >
        About
      </Link>

      <Link
        onClick={() => {
          navigate(<About />);
        }}
      >
        Contact
      </Link>
    </>
  );
};

export default NavigationPage2;
