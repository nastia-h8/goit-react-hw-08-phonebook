import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.spacing(3)};
`;

export const Button = styled.button`
  padding: ${p => p.theme.spacing(1)};
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  border: none;
  border-radius: ${p => p.theme.radii.sm};
  transition: background-color 250ms linear;

  &:hover {
    background-color: ${p => p.theme.colors.bgc};
  }
`;
