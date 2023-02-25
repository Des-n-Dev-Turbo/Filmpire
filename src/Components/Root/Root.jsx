import React from 'react';
import { Outlet } from 'react-router-dom';

import { ToolBarComponent, ContentComponent } from '../styles';
import { NavBar } from '../index';

const Root = () => (
  <>
    <NavBar />
    <ContentComponent>
      <ToolBarComponent />
      <Outlet />
    </ContentComponent>
  </>
);

export default Root;
