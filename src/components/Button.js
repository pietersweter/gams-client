import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Wrapper = styled.button`
  max-width: 200px;
  width: 100%;
  margin: 1rem 0;
  padding: 0 1rem;
  height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  outline: none;
  transform-origin: bottom;
  -webkit-transform-style: preserve-3d;
  transition: transform ${({ theme }) => theme.visuals.transition.base};

  &::after {
    transition: ${({ theme }) => theme.visuals.transition.quick};
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: -100%;
  }

  &:hover {
    &::after {
      right: 0;
    }
  }

  ${({ primary }) => primary
    && css`
    background-color: ${({ theme }) => theme.color.accent.primary};
    color: ${({ theme }) => theme.color.background.base}

    &::after {
      background-color: ${({ theme }) => theme.color.accent.secondary};
    }

    &:hover {
      color: ${({ theme }) => theme.color.accent.primary};
    }
  `}

  ${({ awaiting }) => awaiting
    && css`
    &::before {
      content: '';
      display: block;
      position: absolute;
      transition: ${({ theme }) => theme.visuals.transition.quick};
      transform: translateY(-50%) skew(-10deg, 10deg);
      background-color: ${({ theme }) => theme.color.accent.secondary};
      top: 50%;
      width: 20px;
      height: 200%;
      left: 0;
      animation: awaiting ${({ theme }) => theme.visuals.transition.slow} infinite;
    }
  `}

  ${({ error }) => error
    && css`
    background-color: ${({ theme }) => theme.color.accent.error};
  `}

  @keyframes awaiting {
    0% {
      left: -30px;
    }
    100% {
      left: 100%
    }
  }
`;

const ButtonText = styled.div`
  position: absolute;
  z-index: ${({ theme }) => theme.visuals.zindex.front}
  transition: ${({ theme }) => theme.visuals.transition.quick}
`;

const Button = ({ children, awaiting, ...rest }) => (
  <Wrapper disabled={awaiting} awaiting={awaiting} {...rest}>
    <ButtonText>
      {awaiting ? 'awaiting' : children}
    </ButtonText>
  </Wrapper>
);

Button.propTypes = {
  primary: PropTypes.bool,
  awaiting: PropTypes.bool,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

Button.defaultProps = {
  primary: true,
  awaiting: false,
  error: false,
  disabled: false,
  children: [],
};

export default Button;
