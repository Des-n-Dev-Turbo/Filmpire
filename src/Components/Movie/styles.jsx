import { styled } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const MovieGrid = styled(Grid)(() => ({
  padding: '10px',
}));

export const TitleTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  textOverflow: 'ellipsis',
  width: '230px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  marginTop: '10px',
  marginBottom: 0,
  textAlign: 'center',
}));

export const CustomLink = styled(Link)(({ theme }) => ({
  alignItems: 'center',
  fontWeight: 'bolder',
  [theme.breakpoints.up('xs')]: {
    display: 'flex',
    flexDirection: 'column',
  },
  textDecoration: 'none',
  '&:hover': {
    cursor: 'pointer',
  },
}));

export const PosterImage = styled('img')(() => ({
  borderRadius: '20px',
  height: '300px',
  marginBottom: '10px',
  '&:hover': {
    scale: '1.05',
  },
}));
