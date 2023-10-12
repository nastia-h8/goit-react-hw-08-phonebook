import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { AppBar } from 'components/AppBar/AppBar';
import { GlobalStyle } from 'components/GlobalStyles';

export function SharedLayout() {
  return (
    <>
      <AppBar></AppBar>
      <main>
        <Outlet />
      </main>
      <Toaster toastOptions={{ duration: 2000 }} />
      <GlobalStyle />
    </>
  );
}
