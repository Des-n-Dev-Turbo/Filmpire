import React from 'react';
import { Outlet } from 'react-router-dom';

import { ToolBarComponent, ContentComponent } from '../styles';
import { NavBar } from '../index';

const Root = () => {
  console.log('Root');

  return (
    <>
      <NavBar />
      <ContentComponent>
        <ToolBarComponent />
        <Outlet />
      </ContentComponent>
    </>
  );
};

export default Root;
