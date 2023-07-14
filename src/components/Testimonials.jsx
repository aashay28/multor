import { Grid } from '@material-ui/core';
import React from 'react';
import FiveStarSvg from '../assets/svg/5stars.svg';
import FourHalfStarSvg from '../assets/svg/4-5stars.svg';
const Testimonials = () => {
  return (
    <Grid container className='lg:ps-40 lg:pe-40'>
      <Grid item sm={12} md={12} lg={12}>
        <div className='text-[var(--subheading)] text-center font-bold p-8'>
          DON'T JUST TAKE OUR WORD FOR IT
        </div>
      </Grid>
      <Grid item sm={12} md={6} lg={6}>
        <div className='p-8 lg:p-24'>
          <img src={FiveStarSvg} alt='review1' />
          <div className='text-2xl italic mt-2'>
            Share a real testimonial that hits some of your benefits (but isn't
            too sales-y).
          </div>
          <div className='flex gap-4 mt-4'>
            <img
              src='https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/52bdc545-multor-testimonial1-headshot_101e01e00000000000001o.jpg'
              alt='profile1'
            />
            <div className=''>
              <div>Real Name</div>
              <div>Location</div>
            </div>
          </div>
        </div>
      </Grid>
      <Grid item sm={12} md={6} lg={6}>
        <div className='p-8 lg:p-24'>
          <img src={FourHalfStarSvg} alt='review2' />
          <div className='text-2xl italic mt-2'>
            Include someone talking about how easy it was to sign up and
            participate.
          </div>
          <div className='flex gap-4 mt-4'>
            <img
              src='https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/52bdc545-multor-testimonial1-headshot_101e01e00000000000001o.jpg'
              alt='profile1'
            />
            <div className=''>
              <div>Real Name</div>
              <div>Location</div>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Testimonials;
