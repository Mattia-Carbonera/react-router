import Button from "../button/Button";

export default function Card({ id, image, title, content, onClickFunction }) {
  //   console.log(id);
  return (
    <>
      <div className="card-post" key={id}>
        <div className="card-content">
          <div className="card-image">
            <img src={image} alt="" />
          </div>
          <div className="content">
            <h3>{title}</h3>
            <span>{content}</span>
          </div>
        </div>
        <div className="button-container py-3">
          <Button id={id} onClickFunction={onClickFunction} />
        </div>
      </div>
    </>
  );
}
