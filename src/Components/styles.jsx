import { styled } from '@mui/material/styles';

export const RootComponent = styled('div')(() => ({
  display: 'flex',
  height: '100%',
}));

export const ToolBarComponent = styled('div')(() => ({
  height: '70px',
}));

export const ContentComponent = styled('main')(() => ({
  width: '100%',
  padding: '2em',
  flexGrow: 1,
}));
