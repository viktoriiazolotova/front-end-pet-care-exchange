import "./NoPage.css";

const NoPage = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-12 col-sm-12">
        <div
          id="card"
          className="card shadow-lg border-0 rounded-lg mt-5 mx-auto"
        >
          <h2 className="card-header display-1 text-muted text-center">404</h2>
          <span className="card-subtitle mb-2 text-muted text-center">
            Page Could Not Be Found
          </span>

          <div className="card-body mx-auto">
            <a
              id="button-home"
              type="button"
              href="/"
              className="btn btn-sm text-white"
            >
              Back To Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoPage;
