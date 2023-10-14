import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1200;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${p => p.theme.colors.bgc};
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const Button = styled.button`
  position: absolute;
  padding: 0;
  top: 8px;
  right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  background-color: transparent;
  transition: all 250ms linear;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.bgc};
  }
`;
