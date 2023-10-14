import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 24px;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.spacing(3)};
  padding: ${p => p.theme.spacing(3)};
  border-radius: ${p => p.theme.radii.sm};
  box-shadow: ${p => p.theme.shadow};
`;
