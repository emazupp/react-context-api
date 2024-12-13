export default function DeleteModal({ id, title, handleDelete }) {
  return (
    <>
      <div
        className="modal fade"
        id="delete-modal"
        tabIndex="-1"
        aria-labelledby="delete-modal-lable"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="delete-modal-lable">
                Eliminazione post: {title}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">Sei sicure di voler eliminare?</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Annulla
              </button>
              <button
                onClick={() => {
                  handleDelete(id);
                }}
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Conferma
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
