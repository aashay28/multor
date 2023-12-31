import { Grid } from '@mui/material';
import React from 'react';
import FooterLogoSvg from '../assets/svg/footer-logo.svg';
const Footer = () => {
  return (
    <Grid
      container
      className='p-8 lg:ps-48 lg:pe-48 bg-[var(--font-color)] justify-center lg:justify-between'
    >
      <img src={FooterLogoSvg} alt='logo' className='' />
      <div className='text-[#a1adac] text-center mt-4 lg:mt-0'>
        © 2023 By Aashay. All rights reserved.
      </div>
    </Grid>
  );
};

export default Footer;
