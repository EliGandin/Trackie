import { useEffect, useState } from "react";
import { LatLngTuple } from "leaflet";
import FeedItem from "./FeedItem";

type Post = {
  post_id: number;
  location: { name: string; coordinates: LatLngTuple };
  name: string;
  user_id: number;
  story: string;
};

const Feed = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:8000");
      const data = await res.json();
      setPosts(data.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <FeedItem
          postId={post.post_id}
          location={post.location}
          author={post.name}
          story={post.story}
          key={post.post_id}
        />
      ))}
    </div>
  );
};

export default Feed;
