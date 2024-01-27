// import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { isSideBarExpanded, toggleVisible } from "../../ui/sidebarSlice";

const Feed = () => {
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch("http://localhost:8000");
  //     const data = await res.json();
  //     console.log(data);
  //   }
  //   fetchData();
  // }, []);

  const dispatch = useDispatch();
  dispatch(toggleVisible(true));
  const isSideBarVisible = useSelector(isSideBarExpanded);

  return <div>Feed</div>;
};

export default Feed;
