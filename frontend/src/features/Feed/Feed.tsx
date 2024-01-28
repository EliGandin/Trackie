import { useEffect, useState } from "react";
import { LatLngTuple } from "leaflet";
import FeedItem from "./FeedItem";

type Post = {
  location: { name: string; coordinates: LatLngTuple };
  // author: string;
  user_id: number;
};

const Feed = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:8000");
      const data = await res.json();
      setPosts(data.data);
      console.log(data.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <FeedItem location={post.location} author={post.user_id} />
      ))}
    </div>
  );
};

export default Feed;
