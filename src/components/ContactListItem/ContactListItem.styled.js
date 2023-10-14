import styled from 'styled-components';

export const Item = styled.li`
  position: relative;
  min-width: 500px;
  padding: ${p => p.theme.spacing(3)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* flex-direction: column; */
  gap: ${p => p.theme.spacing(2)};

  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.sm};
`;

export const Name = styled.span`
  font-weight: bold;
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.spacing(2)};
  font-size: 16px;
  line-height: 1.19;
  letter-spacing: 0.03em;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.spacing(2)};
`;

export const Button = styled.button`
  /* min-width: 60px; */
  padding: ${p => p.theme.spacing(1)};
  /* position: absolute;
  right: ${p => p.theme.spacing(2)};
  bottom: ${p => p.theme.spacing(2)}; */
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
