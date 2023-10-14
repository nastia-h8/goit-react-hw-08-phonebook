import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

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

export const Title = styled.h2`
  text-align: center;
`;

export const FormField = styled(Form)`
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${p => p.theme.spacing(2)};
`;

export const Label = styled.label`
  display: block;
  width: 100%;
`;

export const LabelName = styled.span`
  display: block;
  font-size: 14px;
`;

export const InputWrapper = styled.span`
  width: 100%;
  position: relative;
  svg {
    position: absolute;
    left: ${p => p.theme.spacing(2)};
    top: 50%;
    transform: translateY(-50%);
  }
`;
export const Input = styled(Field)`
  width: 100%;
  display: block;
  padding: 12px 40px;
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.sm};
`;

export const Message = styled(ErrorMessage)`
  font-size: 12px;
  color: #ff5549;
`;

export const Button = styled.button`
  margin: 0 auto;
  min-width: 100px;
  padding: ${p => p.theme.spacing(3)};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.spacing(2)};
  font-size: 16px;
  border: none;
  border-radius: ${p => p.theme.radii.sm};
  cursor: pointer;
  transition: background-color 250ms linear;

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.bgc};
  }

  svg {
    margin-left: ${p => p.theme.spacing(2)};
  }
`;
