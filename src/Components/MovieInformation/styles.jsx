import { Grid, Modal } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const SpaceAroundGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  margin: '10px 0 !important',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
}));

export const PosterImage = styled('img')(({ theme }) => ({
  borderRadius: '20px',
  boxShadow: '0.5em 1em 1em rgb(64, 64, 70)',
  width: '80%',
  [theme.breakpoints.down('md')]: {
    margin: '0 auto',
    width: '50%',
  },
  [theme.breakpoints.down('sm')]: {
    margin: '0 auto',
    width: '100%',
    marginBottom: '30px',
  },
}));

export const GenresContainerGrid = styled(Grid)(() => ({
  margin: '10px 0 !important',
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
}));

export const CustomLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textDecoration: 'none',
  [theme.breakpoints.down('sm')]: {
    padding: '0.5rem 1rem',
  },
}));

export const GenreImage = styled('img')(({ theme }) => ({
  filter: theme.palette.mode === 'light' ? 'dark' : 'invert(1)',
  marginRight: '10px',
}));

export const CastImage = styled('img')(() => ({
  width: '100%',
  maxWidth: '7em',
  height: '8em',
  objectFit: 'cover',
  borderRadius: '10px',
}));

const buttonsContainerStyle = (theme) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
});

export const posterImageGridStyle = (theme) => ({
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    marginBottom: '30px',
  },
});

export const ButtonsContainer = styled('div')(({ theme }) => buttonsContainerStyle(theme));

export const ButtonsContainerGrid = styled(Grid)(({ theme }) => buttonsContainerStyle(theme));

export const CustomModal = styled(Modal)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const Videos = styled('iframe')(({ theme }) => ({
  border: 'none',
  width: '50%',
  height: '50%',
  [theme.breakpoints.down('sm')]: {
    width: '90%',
    height: '90%',
  },
}));
