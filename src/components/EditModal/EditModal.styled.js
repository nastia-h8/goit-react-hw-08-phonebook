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

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  background-color: transparent;
  transition: all 250ms linear;

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.bgc};
    color: ${p => p.theme.colors.light};
  }
`;
