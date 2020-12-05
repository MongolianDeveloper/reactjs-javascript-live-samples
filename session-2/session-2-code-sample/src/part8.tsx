import React, { useEffect, useState } from "react";

// 8. useEffect-г ашиглан өгөгдөл татах/хадгалж авах **(Fetch data with useEffect)**
// - useEffect төгсгөлгүй давталт **(Prevent infinite loops in useEffect)**

export default function Part8() {
  const [posts, setPosts] = useState<{ id: number; title: string }[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://www.reddit.com/r/reactjs.json");
      const json = await res.json();

      setPosts(json.data.children.map((c: any) => c.data));
    }

    fetchData();
  }, []);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
