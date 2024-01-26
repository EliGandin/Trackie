import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { useEffect } from "react";
import AppLayout from "./ui/AppLayout";
import Feed from "./features/Feed/Feed";
import SignupForm from "./ui/SignupForm";
import Home from "./pages/Home";

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
]);

const App = () => {
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch("http://localhost:8000");
  //     const data = await res.json();
  //     console.log(data);
  //   }
  //   fetchData();
  // }, []);

  return <RouterProvider router={router} />;
};

export default App;
