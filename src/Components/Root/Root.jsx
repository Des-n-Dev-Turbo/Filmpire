import React, { useRef } from 'react';
import { Outlet } from 'react-router-dom';

import useAlan from '../Alan';
import { NavBar } from '../index';
import { ToolBarComponent, ContentComponent } from '../styles';

const Root = () => {
  const alanBtnContainer = useRef();
  useAlan();

  return (
    <>
      <NavBar />
      <ContentComponent>
        <ToolBarComponent />
        <Outlet />
      </ContentComponent>
      <div ref={alanBtnContainer} />
    </>
  );
};

export default Root;
