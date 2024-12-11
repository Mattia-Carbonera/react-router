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

  //   gestisco il click dei bottoni per la modal
  const [selectedPostModal, setSelectedPostModal] = useState();
  const handlerModalButton = (e) => {
    setSelectedPostModal(e.target.id);
    console.log(e.target.id);
  };

  //   gestisco eliminazione pizza
  const fetchDeletePost = (id) => {
    fetch(`${serverHosting}${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        postsFetch();
      });
  };

  const handleDeletePost = (id) => {
    fetchDeletePost(id);
  };

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
                onClickFunction={() => handleDeletePost(post.id)}
              />
            ))}
          </div>
        </div>

        {/* modal */}
        <div
          className="modal fade"
          id="delete"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  Sei sicuri di voler eliminare l'elemento?
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">Post numero {selectedPostModal}</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Understood
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
