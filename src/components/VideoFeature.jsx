import { Grid } from '@material-ui/core';
import React from 'react';

const VideoFeature = () => {
  return (
    <Grid container className='-translate-y-12 lg:-translate-y-48 ps-4 pe-4'>
      <Grid item lg={1}></Grid>
      <Grid item sm={12} md={12} lg={10}>
        <div className='aspect-w-16 aspect-h-9'>
          <video className='w-full h-full' controls>
            <source
              src='https://player.vimeo.com/external/463818492.sd.mp4?s=9dbf66b8b1d3699e7185144d2184fe12476773e9&profile_id=164&oauth2_token_id=57447761'
              type='video/mp4'
            />
          </video>
        </div>
      </Grid>
      <Grid item lg={1}></Grid>
    </Grid>
  );
};

export default VideoFeature;
