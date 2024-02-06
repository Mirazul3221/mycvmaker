import React, { useEffect, useState } from "react";
import SinglePost from "./SinglePost";

const Posts = () => {
  const [postData, getPostData] = useState("");
  const uri = "https://jsonplaceholder.typicode.com/posts";
  const getPost = async (data) => {
    const feceData = await fetch(data);
    const posts = await feceData.json();
    getPostData(posts);
  };

  useEffect(() => {
    getPost(uri);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-8">
      {postData.map((data) => {
        const { id, title, body } = data;
        const destruct = (text, number) => {
          return text.slice(0, number) + "...";
        };
        return (
          <div key={id} className=" bg-amber-300 px-4 py-2">
            <h2 className="mb-2">{title}</h2>
            <p>{destruct(body, 50)}</p>
            <div className="px-6 py-[4px] bg-white w-fit">Read More...</div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
