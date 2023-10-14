import { StyledLoader, LoaderWrapper } from './FallbackLoader.styled';

export function FallbackLoader({ size = 20 }) {
  return (
    <LoaderWrapper>
      <StyledLoader
        style={{ width: `${size}px`, height: `${size}px` }}
      ></StyledLoader>
    </LoaderWrapper>
  );
}
