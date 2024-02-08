import { LatLngTuple } from "leaflet";
import { useQuery } from "@tanstack/react-query";
import FeedItem from "./FeedItem";
import EmptyFeed from "./EmptyFeed";
import { getAllPosts } from "../../services/postServices";

type Post = {
  post_id: number;
  location: { name: string; coordinates: LatLngTuple };
  name: string;
  user_id: number;
  story: string;
};

const Feed = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await getAllPosts();
      return res.data;
    },
  });

  return (
    <div>
      {/* TODO:
      {isLoading && <p>Loading</p>} */}

      {!data || data?.length === 0 ? (
        <EmptyFeed />
      ) : (
        data.map((post: Post) => (
          <FeedItem
            postId={post.post_id}
            location={post.location}
            author={post.name}
            story={post.story}
            key={post.post_id}
          />
        ))
      )}
    </div>
  );
};

export default Feed;
