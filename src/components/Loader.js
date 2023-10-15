import { Oval } from 'react-loader-spinner';

export function Loader({ size = 20 }) {
  return (
    <Oval
      height={size}
      width={size}
      color="#1976d2"
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#ffffff"
      strokeWidth={5}
      strokeWidthSecondary={5}
    />
  );
}
