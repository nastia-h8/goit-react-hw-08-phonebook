import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.spacing(3)};
`;

export const StyledLink = styled(NavLink)`
  padding: 4px 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  border: none;
  border-radius: ${p => p.theme.radii.sm};
  background-color: ${p => p.theme.colors.secondaryBgc};
  text-decoration: none;
  color: inherit;
  transition: background-color 250ms linear;

  &:hover {
    background-color: ${p => p.theme.colors.bgc};
  }
`;
