import { StyledLoader } from './Loader.styled';

export function Loader({ size = 20 }) {
  return (
    <StyledLoader
      style={{ width: `${size}px`, height: `${size}px` }}
    ></StyledLoader>
  );
}
