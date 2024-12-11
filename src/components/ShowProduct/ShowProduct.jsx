const serverHosting = import.meta.env.VITE_SERVER_HOSTING;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ShowProduct() {
  const { id } = useParams();

  //   eseguo la chiamata e filtro il post
  const [selectedPost, setSelectedPost] = useState({});
  const singlePostFetch = () => {
    fetch(serverHosting).then((res) =>
      res.json().then((data) => {
        const postsArray = data[1];
        const postFiltered = postsArray.filter((post) => post.id == id);
        setSelectedPost(postFiltered);
      })
    );
  };

  useEffect(() => {
    singlePostFetch();
  }, []);

  return (
    <div className="product-selected-container">
      <h1>{`card numero: ${id}`}</h1>
      <div className="post-selected-container">
        <div className="selected-item">
          <img src="" alt="" />
          <h2>Title</h2>
          <p>Content</p>
          <span>Tags</span>
        </div>
      </div>
    </div>
  );
}
