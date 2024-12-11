import { Link } from "react-router-dom";

export default function Button({ id }) {
  //   console.log(id);
  return (
    <Link to={`/posts/${id}`} className="btn btn-primary button-show">
      Mostra
    </Link>
  );
}
