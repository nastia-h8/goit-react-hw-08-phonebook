import { ColorRing } from 'react-loader-spinner';

export function FallbackLoader() {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{
        zIndex: '9999',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%)',
      }}
      wrapperClass="blocks-wrapper"
      colors={['#1976d2', '#A594F9', '#CDC1FF', '#807EFC', '#7371FC']}
    />
  );
}
