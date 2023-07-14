import { Grid } from '@mui/material';
import React from 'react';

import AboutImage from '../assets/images/about-image.jpeg';
const About = () => {
  return (
    <Grid container className='p-8 mb-12'>
      <Grid item sm={12} md={12} lg={6}>
        <div className='flex justify-center'>
          <img src={AboutImage} alt='about' />
        </div>
      </Grid>
      <Grid item sm={12} md={12} lg={6}>
        <div className='text-[var(--subheading)] font-bold mt-16'>About</div>
        <div className='text-2xl font-bold lg:text-5xl lg:pe-48 mt-4'>
          Some more information about your business
        </div>
        <div className='text-desc lg:pe-48 mt-4'>
          Share a little about yourself as a business owner, or maybe describe
          what makes your service unique. Give visitors one more reason to care
          about your offer and want to work with you.
        </div>
      </Grid>
    </Grid>
  );
};

export default About;
