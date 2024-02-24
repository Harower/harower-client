import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const PageError = lazy(() => import('../components/errors/PageError.tsx'));

// Layouts
const AuthLayout = lazy(() => import('../layouts/AuthLayout.tsx'));

// Authentication
const LoginPage = lazy(() => import('../pages/auth/LoginPage.tsx'));
const RegistrationPage = lazy(() => import('../pages/auth/RegistrationPage.tsx'));
const VerifyPhonePage = lazy(() => import('../pages/auth/VerifyPhonePage.tsx'));
const ForgotPasswordPage = lazy(() => import('../pages/auth/ForgotPasswordPage.tsx'));
const ResetPasswordPage = lazy(() => import('../pages/auth/ResetPasswordPaage.tsx'));

// Dashboard
const MyShopPage = lazy(() => import('../pages/shop/MyShop.tsx'));

const router = createBrowserRouter([
  {
    path: '/',
    id: 'Dashboard',
    element: <MyShopPage />,

    errorElement: <PageError />,
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'join/:userType',
        element: <RegistrationPage />,
      },
      {
        path: 'verify-phone',
        element: <VerifyPhonePage />,
      },
      {
        path: 'login-userd',
        element: <LoginPage />,
      },
      {
        path: 'forgot-password',
        element: <ForgotPasswordPage />,
      },
      {
        path: 'reset-password',
        element: <ResetPasswordPage />,
      },
    ],
  },
  {
    path: '*',
    element: <PageError />,
  },
]);

export default router;
