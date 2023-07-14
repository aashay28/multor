import { Grid } from '@mui/material';
import React from 'react';

const ShowVisitors = () => {
  return (
    <Grid
      container
      className='bg-[var(--background)] p-2 lg:p-24 h-[400px] lg:h-[600px]'
    >
      <Grid
        item
        sm={12}
        md={12}
        lg={3}
        className='bg-[var(--background)]'
      ></Grid>
      <Grid item sm={12} md={12} lg={5}>
        <div className='text-3xl sm:text-5xl font-bold text-center'>
          Show visitors what they're signing up for
        </div>
        <div className='text-desc text-center mt-4'>
          Include a video or photo from one of your sessions to help people
          understand your service (or just to hype ‘em up).
        </div>
      </Grid>
    </Grid>
  );
};

export default ShowVisitors;
