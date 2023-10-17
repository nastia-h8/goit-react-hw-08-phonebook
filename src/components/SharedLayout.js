import CssBaseline from '@mui/material/CssBaseline';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { FallbackLoader } from 'components/FallbackLoader';
import { PageAppBar } from './PageAppBar';

export function SharedLayout() {
  return (
    <>
      <PageAppBar />
      <main>
        <Suspense fallback={<FallbackLoader size={40} />}>
          <Outlet />
        </Suspense>
      </main>
      <Toaster toastOptions={{ duration: 3000 }} />
      <CssBaseline />
    </>
  );
}
