import { Box, Grid } from '@mui/material';
import React from 'react';
import { BenefitCards } from '../helpers/const';

const Appointment = () => {
  return (
    <Grid container className='flex flex-col-reverse lg:flex-row mb-6 p-4'>
      <Grid item lg={1}></Grid>
      <Grid item sm={12} md={12} lg={5}>
        {BenefitCards.map((card, i) => (
          <div
            key={i}
            className='flex ps-8 pe-8 p-4  lg:ps-24 lg:pe-24 lg:p-12 lg:pb-4'
          >
            <img src={card.svgImage} alt={card.title} />
            <div className='flex flex-col ms-4'>
              <div className='text-xl lg:text-2xl font-bold text-[var(--font-color)]'>
                {card.title}
              </div>
              <div className='text-desc mt-2'>{card.description}</div>
            </div>
          </div>
        ))}
      </Grid>
      <Grid item sm={12} md={12} lg={4} className='lg:-translate-y-24'>
        <Box className='bg-[var(--font-color)] justify-center ps-8 pe-8 p-12  lg:ps-24 lg:pe-24 lg:p-12 '>
          <div className='text-white text-2xl font-bold mb-4 text-center'>
            Schedule an Appointment
          </div>
          <div className='text-white mb-4 text-center'>
            Here, let visitors know what will happen when they complete your
            form.
          </div>
          <form>
            <div className='mb-1 sm:mb-2'>
              <input
                placeholder='First Name*'
                required
                type='text'
                className='flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline'
                id='firstName'
                name='firstName'
              />
            </div>
            <div className='mb-1 sm:mb-2'>
              <input
                placeholder='Last Name*'
                required
                type='text'
                className='flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline'
                id='lastName'
                name='lastName'
              />
            </div>
            <div className='mb-1 sm:mb-2'>
              <input
                placeholder='Email*'
                required
                type='text'
                className='flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline'
                id='email'
                name='email'
              />
            </div>
            <div className='mb-1 sm:mb-2'>
              <input
                placeholder='Phone Number*'
                required
                type='text'
                className='flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline'
                id='email'
                name='email'
              />
            </div>
            <div className='mb-1 sm:mb-2'>
              <input
                placeholder='Type'
                required
                type='text'
                className='flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline'
                id='email'
                name='email'
              />
            </div>
            <div className='mt-4 mb-2 sm:mb-4'>
              <button
                type='submit'
                className='inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[var(--button-color)]  focus:shadow-outline focus:outline-none'
              >
                Subscribe
              </button>
            </div>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Appointment;
