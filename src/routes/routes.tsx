import App from "../App";
import Home from "../components/Home";
import Books from "../components/Books";
import BookDetails from "../components/BookDetails";
import { createBrowserRouter } from "react-router-dom";
import SignUp from "../components/SignUp";
import Login from "../components/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/details",
        element: <BookDetails/>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
]);

export default routes;
