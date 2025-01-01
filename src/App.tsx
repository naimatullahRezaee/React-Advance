import { useState, useEffect, type ReactNode } from "react";
import { get } from "./util/http";

import PostList from "./components/PostList";

type Post = {
  id: number;
  title: string;
  text: string;
};

type Data = {
  id: number;
  userId: number;
  title: string;
  body: string;
};
function App() {
  const [fetchPosts, setFetchPosts] = useState<Post[]>();
  useEffect(() => {
    async function fetchData() {
      const data = (await get(
        "https://jsonplaceholder.typicode.com/posts"
      )) as Data[];

      const blogPosts: Post[] = data.map((item) => {
        return {
          id: item.id,
          title: item.title,
          text: item.body,
        };
      });
      setFetchPosts(blogPosts);
    }
    fetchData();
  }, []);

  let content: ReactNode;

  if (fetchPosts) {
    content = <PostList posts={fetchPosts} />;
  }

  return <div>{content}</div>;
}

export default App;
