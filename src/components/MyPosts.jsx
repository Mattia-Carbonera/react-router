import posts from "../db/posts";
import Card from "./card/Card";

export default function MyPosts() {
  return (
    <>
      <main>
        <h1>My Posts</h1>
        <div className="container">
          <div className="card-container">
            {posts.map((post, index) => (
              <Card
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
