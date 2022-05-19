import {Navigate, useRoutes} from 'react-router-dom';
import {lazy, Suspense} from "react";
import LoadingScreen from '../components/common/LoadingScreen'
import MainLayout from '../layouts/MainLayout'
import LogoOnlyLayout from '../layouts/LogoOnlyLayout'
// import ProtectedRoute from './ProtectedRoute'

const Loadable = (Component) => (props) => {
  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            top: 0,
            left: 0,
            width: 1,
            zIndex: 9999,
            position: "fixed",
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "*",
      element: <LogoOnlyLayout />,
      children: [
        { path: "proximamente", element: <ComingSoon /> },
        // { path: "maintenance", element: <Maintenance /> },
        // { path: "500", element: <Page500 /> },
        { path: "404", element: <NotFound /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    {
      path: '/',
      element: (
        // <ProtectedRoute>
          <MainLayout/>
        // </ProtectedRoute>
      ),
      children: [
        {path: '', element: <Home/>},
      ]
    },
    // {
    //   path: '/auth',
    //   element: <LogoOnlyLayout />,
    //   children: [
    //     {path: 'login', element: <Login />},
    //   ]
    // },
    { path: "*", element: <Navigate to="/404" replace /> },
  ])
}

const Home = Loadable(lazy(() => import('../pages/Home')))

//auth
// const Login = Loadable(lazy(() => import('../pages/auth/Login')))

// Generics
const NotFound = Loadable(lazy(() => import('../pages/NotFound')))
const ComingSoon = Loadable(lazy(() => import('../pages/ComingSoon')))

