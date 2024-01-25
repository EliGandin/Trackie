import { useEffect } from "react";

const Feed = () => {
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:8000");
      const data = await res.json();
      console.log(data);
    }
    fetchData();
  }, []);

  return <div>Feed</div>;
};

export default Feed;
