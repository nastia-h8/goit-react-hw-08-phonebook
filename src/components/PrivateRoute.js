import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

import React from 'react';

export function PrivateRoute({ component: Component, redirectTo = '/' }) {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}
