import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Feed from "./features/Feed/Feed";
import { useEffect } from "react";

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
