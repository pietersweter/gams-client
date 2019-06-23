import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

const Wrapper = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${({ theme }) => theme.size.gap}
  padding: 0 ${({ theme }) => theme.size.padding.normal}
  box-sizing: border-box;
`;

const Screen = styled.div`
  height: 100%;
  margin: 0 ${({ theme }) => theme.size.gap};
  // border: ${({ theme }) => theme.size.border} solid ${({ theme }) => theme.color.elements.line};
  border-radius: ${({ theme }) => theme.size.borderRadius}
  box-sizing: border-box;
  padding: ${({ theme }) => theme.size.padding.big};
  background: ${({ theme }) => theme.color.background.base}
`;

const createScreen = (Display, LeftColumn, RightColumn) => () => (
  <Wrapper>
    <LeftColumn />
    <Screen>
      <Display />
    </Screen>
    <RightColumn />
  </Wrapper>
);

export default createScreen;
