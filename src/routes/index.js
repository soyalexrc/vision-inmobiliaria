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
        {path: 'servicios', element: <Services/>},
        {path: 'asesores', element: <Advisers/>},
        {path: 'asesores/:adviser', element: <AdvisersDetail/>},
        {path: 'alquiler', element: <Rent/>},
        {path: 'alquiler/:slug', element: <RentDetail/>},
        {path: 'compra', element: <Sell/>},
        {path: 'compra/:slug', element: <SellDetail/>},
        {path: 'blog', element: <Blog/>},
        {path: 'blog/:slug', element: <Post/>},
        {path: 'contacto', element: <Contact/>},
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
const Services = Loadable(lazy(() => import('../pages/Services')))
const Rent = Loadable(lazy(() => import('../pages/rent/Rent')))
const RentDetail = Loadable(lazy(() => import('../pages/rent/Detail')))
const Sell = Loadable(lazy(() => import('../pages/sell/Sell')))
const SellDetail = Loadable(lazy(() => import('../pages/sell/Detail')))
const Blog = Loadable(lazy(() => import('../pages/blog/Blog')))
const Post = Loadable(lazy(() => import('../pages/blog/Post')))
const Contact = Loadable(lazy(() => import('../pages/Contact')))
const Advisers = Loadable(lazy(() => import('../pages/advisers/Advisers')))
const AdvisersDetail = Loadable(lazy(() => import('../pages/advisers/Detail')))

//auth
// const Login = Loadable(lazy(() => import('../pages/auth/Login')))

// Generics
const NotFound = Loadable(lazy(() => import('../pages/NotFound')))
const ComingSoon = Loadable(lazy(() => import('../pages/ComingSoon')))

