import { Grid } from '@material-ui/core';
import React from 'react';
import { FeatureCards } from '../helpers/const';

const FeatureCard = () => {
  return (
    <Grid container className='p-8 lg:ps-40 lg:pe-40'>
      {FeatureCards.map((card, i) => (
        <Grid key={i} item sm={12} lg={4} className='p-8'>
          <img src={card.Image} alt='Feature1' height={169} width={300} />
          <div className='text-2xl font-bold mt-4'>{card.title}</div>
          <div className='text-desc pe-6 lg:pe-36 mt-4'>{card.description}</div>
        </Grid>
      ))}
    </Grid>
  );
};

export default FeatureCard;
