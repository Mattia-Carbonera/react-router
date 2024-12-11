import { Link } from "react-router-dom";

export default function Button({ id }) {
  //   console.log(id);
  return (
    <div className="button-card">
      <Link to={`/posts/${id}`} className="btn btn-primary button-show">
        Mostra
      </Link>

      {/* <button
        className="btn btn-danger"
        data-bs-toggle="modal"
        data-bs-target={`#delete-modal-${id}`}
      >
        Elimina
      </button> */}
    </div>
  );
}
