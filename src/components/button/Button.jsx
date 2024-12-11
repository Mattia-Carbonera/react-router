import { Link } from "react-router-dom";

export default function Button({ id, onClickFunction }) {
  //   console.log(id);
  return (
    <div className="button-card">
      <Link to={`/posts/${id}`} className="btn btn-primary button-show">
        Mostra
      </Link>

      <button
        id={id}
        type="button"
        className="btn btn-danger"
        data-bs-toggle="modal"
        data-bs-target="#delete"
        onClick={onClickFunction}
      >
        Elimina
      </button>
    </div>
  );
}
