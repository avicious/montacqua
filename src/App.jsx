import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./pages/ErrorPage";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import VillaPage from "./pages/VillaPage";
import AboutPage from "./pages/AboutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/villas", element: <VillaPage /> },
      { path: "/about", element: <AboutPage /> },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;
export default App;
