// import posts from "../db/posts";
const serverHosting = import.meta.env.VITE_SERVER_HOSTING;

import { useState, useEffect } from "react";
import Card from "./card/Card";

export default function MyPosts() {
  // Stampo in pagina le card dei post
  const [postArray, setPostArray] = useState([]);

  const postsFetch = () => {
    fetch(serverHosting)
      .then((res) => res.json())
      .then((data) => {
        setPostArray(data[1]);
        // console.log(postArray);
      });
  };

  useEffect(() => {
    postsFetch();
  }, []);

  return (
    <>
      <main>
        <h1>My Posts</h1>
        <div className="container">
          <div className="card-container">
            {postArray.map((post, index) => (
              <Card
                id={post.id}
                key={index}
                title={post.title}
                content={post.content}
                image={post.image}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
