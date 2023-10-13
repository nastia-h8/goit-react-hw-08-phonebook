import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { AppBar } from 'components/AppBar/AppBar';
import { GlobalStyle } from 'components/GlobalStyles';
import { Loader } from 'components/Loader/Loader';

export function SharedLayout() {
  return (
    <>
      <AppBar></AppBar>
      <main>
        <Suspense fallback={<Loader size={40} />}>
          <Outlet />
        </Suspense>
      </main>
      <Toaster toastOptions={{ duration: 3000 }} />
      <GlobalStyle />
    </>
  );
}
