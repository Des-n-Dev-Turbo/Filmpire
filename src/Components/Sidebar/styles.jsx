import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

export const CustomMainLink = styled(Link)(() => ({
  display: 'flex',
  justifyContent: 'center',
  padding: '10% 0',
}));

export const CustomImage = styled('img')(() => ({
  width: '70%',
}));

export const CustomCategoryLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: 'none',
}));

export const GenreImage = styled('img')(({ theme }) => ({
  filter: theme.palette.mode === 'light' ? 'dark' : 'invert(1)',
}));
