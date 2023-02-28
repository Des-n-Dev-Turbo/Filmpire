import { Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Container = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const CustomButton = styled(Button)(() => ({
  margin: '30px 2px',
}));

export const PageNumber = styled(Typography)(({ theme }) => ({
  margin: '0 30px !important',
  color: theme.palette.text.primary,
}));
