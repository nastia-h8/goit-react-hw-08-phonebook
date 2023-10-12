import { StyledLoader } from './Loader.styled';

export function Loader({ size }) {
  return (
    <StyledLoader
      style={{ width: `${size}px`, height: `${size}px` }}
    ></StyledLoader>
  );
}
