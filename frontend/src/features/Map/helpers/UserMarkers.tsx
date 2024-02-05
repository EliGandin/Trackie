import { Marker } from "react-leaflet";
import { useEffect, useState } from "react";
import { LatLngTuple } from "leaflet";

type Post = {
  post_id: number;
  location: { name: string; coordinates: LatLngTuple };
  // author: string;
  user_id: number;
  story: string;
};

const UserMarkers = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:8000");
      const data = await res.json();
      setPosts(data.data);
    }
    fetchData();
  }, []);

  return posts.map((post) => {
    return <Marker position={post.location.coordinates} key={post.post_id} />;
  });
};

export default UserMarkers;
