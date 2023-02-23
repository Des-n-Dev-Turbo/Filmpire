import React from 'react';
import { Outlet } from 'react-router-dom';

import useStyles from '../styles';
import { NavBar } from '../../Components';

const Root = () => {
  const classes = useStyles();

  return (
    <>
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Outlet />
      </main>
    </>
  );
};

export default Root;
