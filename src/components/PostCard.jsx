import { useNavigate } from "react-router-dom";

export default function PostCard({ id, title, image, author }) {
  const navigate = useNavigate();
  return (
    <div className="col-3">
      <div onClick={() => navigate(`/posts/${id}`)} className="card h-100">
        <img src={image} alt={title} className="card-img" />

        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{author}</p>
        </div>
      </div>
    </div>
  );
}
