import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DeleteModal from "../components/DeleteModal";

export default function SinglePostPage() {
  const { id } = useParams();
  const [post, setPost] = useState(undefined);

  useEffect(() => {
    fetchSinglePost();
  }, []);

  const fetchSinglePost = () => {
    fetch(`http://localhost:3000/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  };

  return (
    <main>
      <div className="container single-card-container">
        <div className="button-wrapper mt-3">
          <button className="backArrow-button " onClick={() => navigate(-1)}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          <button
            className="delete-button "
            data-bs-toggle="modal"
            data-bs-target="#delete-modal"
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
        <div className="single-card-wrapper">
          {post && (
            <div className="col-9">
              <div className="card single-title-card">
                <img
                  src={`http://localhost:3000/${post.image}`}
                  className="img-fluid rounded-start w-100"
                  alt={post.id}
                />
                <div className="card-body">
                  <h5 className="card-title">Titolo: {post.title}</h5>
                  <p className="card-text">Autore: {post.author}</p>
                  <div className="card-text">
                    Categorie:{" "}
                    {post.category.length
                      ? post.category.map((el, index) => (
                          <span className="ms-2 p-1" key={index}>
                            {el}
                          </span>
                        ))
                      : "Nessuna categoria"}
                  </div>
                  <p className="card-text">
                    Pubbicato:{" "}
                    {post.published ? (
                      <i className="fa-solid fa-check"></i>
                    ) : (
                      <i className="fa-solid fa-xmark"></i>
                    )}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {post && <DeleteModal id={post.id} title={post.title} />}
    </main>
  );
}
