import React from 'react'
import styled from 'styled-components';
import { Header } from './Header';
import { Outlet } from 'react-router-dom';

const LayoutContainer = styled.div`
  background-color: #e9ecef;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Outlet: 자식 컴포넌트의 위치

// Layout: 부모컴포넌트
// Home,Login,Register: 자식컴포넌트
export const Layout = () => {
  return (
    <LayoutContainer>
      <Header></Header>
      <Outlet></Outlet> {/* Home,Login,Register */}
    </LayoutContainer>
  );
};