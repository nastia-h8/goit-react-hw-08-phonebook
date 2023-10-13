import { StyledLoader } from './Loader.styled';

export function Loader({ size = 20 }) {
  return (
    <StyledLoader
      style={{ width: `${size}px`, height: `${size}px` }}
    ></StyledLoader>
  );
}

// import { ColorRing } from 'react-loader-spinner';

// export function Loader({ size = 20 }) {
//   return (
//     <ColorRing
//       visible={true}
//       height={size}
//       width={size}
//       ariaLabel="blocks-loading"
//       wrapperStyle={{
//         zIndex: '9999',
//         position: 'fixed',
//         top: '50%',
//         left: '50%',
//         transform: 'translate(-50%)',
//       }}
//       wrapperClass="blocks-wrapper"
//       colors={['rgb(0, 122, 255)', '#A594F9', '#CDC1FF', '#807EFC', '#7371FC']}
//     />
//   );
// }
