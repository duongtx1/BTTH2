import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <HomePage /> }],
  },
  {
    path: "/admin",
    errorElement: <ErrorPage />,
    element: <AdminPage />,
  },
  {
    path: "/signin",
    errorElement: <ErrorPage />,
    element: <SignInPage />,
  },
  {
    path: "/signup",
    errorElement: <ErrorPage />,
    element: <SignUpPage />,
  },
]);

export default router;
