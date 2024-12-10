export default function Card({ id, image, title, content }) {
  return (
    <div className="card-post" key={id}>
      <div className="card-image">
        <img src={image} alt="" />
      </div>
      <div className="content">
        <h3>{title}</h3>
        <span>{content}</span>
      </div>
    </div>
  );
}
