import styled from 'styled-components';

export const LoaderWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
`;

export const StyledLoader = styled.div`
  margin: 0 auto;
  border: 6px solid ${p => p.theme.colors.secondary};
  border-top: 6px solid ${p => p.theme.colors.bgc};
  border-radius: 50%;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;