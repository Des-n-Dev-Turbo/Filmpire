import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppBar, Avatar, Button, Drawer, IconButton, useMediaQuery } from '@mui/material';
import { AccountCircle, Brightness4, Brightness7, Menu } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

import { ColorModeContext } from '../../Utils/ToggleColorMode';
import { setUser, userSelector } from '../../Features/auth';
import Sidebar from '../Sidebar/Sidebar';
import Search from '../Search/Search';
import { fetchToken, createSessionId, moviesApi } from '../../Utils';

import { CustomNav, LinkButton, MenuIconButton, ToolBarComponent } from './styles';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 600px)');
  const theme = useTheme();
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector(userSelector);
  const { toggleColorMode } = useContext(ColorModeContext);

  const token = localStorage.getItem('request_token');
  const sessionIdFromLocalStorage = localStorage.getItem('session_id');

  useEffect(() => {
    const loginUser = async () => {
      if (token) {
        if (sessionIdFromLocalStorage) {
          const { data: userData } = await moviesApi.get(`/account?session_id=${sessionIdFromLocalStorage}`);
          dispatch(setUser(userData));
        } else {
          const sessionId = await createSessionId();
          const { data: userData } = await moviesApi.get(`/account?session_id=${sessionId}`);
          dispatch(setUser(userData));
        }
      }
    };
    loginUser();
  }, [token]);

  return (
    <>
      <AppBar position="fixed">
        <ToolBarComponent>
          {isMobile && (
            <MenuIconButton
              color="inherit"
              edge="start"
              style={{ outline: 'none' }}
              onClick={() => {
                setMobileOpen((prevMobileOpen) => !prevMobileOpen);
              }}
            >
              <Menu />
            </MenuIconButton>
          )}
          <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => toggleColorMode()}>
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && <Search />}
          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={fetchToken}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <LinkButton color="inherit" component={Link} to={`/profile/${user.id}`} onClick={() => {}}>
                {!isMobile && <>My Movies &nbsp;</>}
                <Avatar
                  style={{ width: 30, height: 30 }}
                  alt="Profile"
                  src={`https://themoviedb.org/t/p/w64_and_h64_face${user?.avatar?.tmdb?.avatar_path}`}
                />
              </LinkButton>
            )}
          </div>
          {isMobile && <Search />}
        </ToolBarComponent>
      </AppBar>
      <div>
        <CustomNav>
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={() => {
                setMobileOpen((prevMobileOpen) => !prevMobileOpen);
              }}
              ModalProps={{ keepMounted: true }}
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          ) : (
            <Drawer variant="permanent" open>
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
        </CustomNav>
      </div>
    </>
  );
};

export default Navbar;
