import { Outlet } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import GlobalSnackbar from "../components/Globalsnackbar";

export default function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <GlobalSnackbar />
      <Footer />
    </>
  )
}
