import { Grid } from '@mui/material';
import React from 'react';

import LogoSvg from '../assets/svg/main-logo.svg';
const HeaderSection = () => {
  return (
    <Grid className='relative bg-bannerImage bg-cover bg-center bg-no-repeat'>
      <div className='relative mx-auto max-w-screen-xl px-4 py-24 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8'>
        <div className='max-w-xl text-left'>
          <img src={LogoSvg} alt='logo' className='mb-12' />
          <h1 className='text-3xl font-extrabold sm:text-5xl'>
            Describe the value of booking an appointment
          </h1>

          <p className='text-xl mt-4'>
            No need to get clever. Tell people exactly what you're offering,
            then use this space to communicate your key value proposition.
          </p>
        </div>
      </div>
    </Grid>
  );
};

export default HeaderSection;
