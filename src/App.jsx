/* import "./App.css"; */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/home/Home";
import DetailsPage from "./pages/details/Details";
import FavoritesPage from "./pages/favorites/Favorites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        /* path: "/details/:movieId/:movieTitle/:movieOverview", */
        path: "/details",
        element: <DetailsPage />,
      },
      {
        path: "/favorites",
        element: <FavoritesPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
