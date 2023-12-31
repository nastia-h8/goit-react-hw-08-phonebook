export const selectUser = state => state.auth.user;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectIsRegister = state => state.auth.isRegister;
export const selectIsLoggingIn = state => state.auth.isLoggingIn;
export const selectToken = state => state.auth.token;
export const selectError = state => state.auth.error;
