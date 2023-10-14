import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.spacing(3)};
`;
