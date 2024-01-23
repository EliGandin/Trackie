import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Feed from "./features/Feed/Feed";
// import { useEffect } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    // errorElement: <Error /> //TODO:
    children: [
      { path: "/" }, //TODO: INDEX ROUTE
      { path: "/feed", element: <Feed /> },
      // {path: "post/new", element: <Post />}, //TODO:
    ],
  },
]);

const App = () => {
  // useEffect(() => {
  //   async function call() {
  //     const res = await fetch("localhost:8000");
  //     console.log(res);
  //   }
  //   call();
  // }, []);

  return <RouterProvider router={router} />;
};

export default App;
