import { styled } from '@mui/material/styles';

export const PosterImage = styled('img')(() => ({
  maxWidth: '90%',
  borderRadius: '20px',
  objectFit: 'cover',
  boxShadow: '0.5em 0.5em 1em rgb(64, 64, 70)',
}));
