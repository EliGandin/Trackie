import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Feed from "./features/Feed/Feed";
import SignupForm from "./pages/signup/SignupForm";
import Home from "./pages/home/Home";
import LoginForm from "./pages/login/LoginForm";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/app",
    element: <AppLayout />,
    // errorElement: <Error /> //TODO:
    children: [
      // { path: "/" }, //TODO: INDEX ROUTE
      { path: "/app/feed", element: <Feed /> },
      // {path: "post/new", element: <Post />}, //TODO:
    ],
  },
  { path: "/signup", element: <SignupForm /> },
  { path: "/login", element: <LoginForm /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
