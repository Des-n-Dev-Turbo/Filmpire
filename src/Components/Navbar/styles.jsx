import { IconButton, Toolbar, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const drawerWidth = 240;

export const ToolBarComponent = styled(Toolbar)(({ theme }) => ({
  height: '60px',
  display: 'flex',
  justifyContent: 'space-between',
  marginLeft: '240px',
  [theme.breakpoints.down('sm')]: {
    marginLeft: 0,
    flexWrap: 'wrap',
  },
}));

export const MenuIconButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

export const CustomNav = styled('nav')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    width: drawerWidth,
    flexShrink: 0,
  },
}));

export const LinkButton = styled(Button)(() => ({
  '&:hover': {
    color: 'white !important',
    textDecoration: 'none',
  },
}));
