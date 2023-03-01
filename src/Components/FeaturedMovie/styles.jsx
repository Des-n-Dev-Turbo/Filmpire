import { styled } from '@mui/material/styles';
import { Box, Card, CardContent, CardMedia } from '@mui/material';

export const FeaturedCardContainer = styled(Box)(() => ({
  marginBottom: '20px',
  display: 'flex',
  justifyContent: 'center',
  height: '490px',
  textDecoration: 'none',
}));

export const CustomCard = styled(Card)(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  flexDirection: 'column',
}));

export const CustomCardMedia = styled(CardMedia)(() => ({
  position: 'absolute',
  top: 0,
  right: 0,
  height: '100%',
  width: '100%',
  backgroundColor: 'rgba(0,0,0,0.575)',
  backgroundBlendMode: 'darken',
}));

export const CustomCardContent = styled(CardContent)(({ theme }) => ({
  color: '#fff',
  width: '40%',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));
