import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.spacing(3)};
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.spacing(1)};
`;

export const StyledLink = styled(NavLink)`
  width: 65px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid transparent;
  text-decoration: none;
  color: inherit;
  transition: border-color 250ms linear;

  &:hover {
    border-color: ${p => p.theme.colors.bgc};
  }
`;
