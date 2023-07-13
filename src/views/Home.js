import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

function Home() {
  return (
    <div className="mt-2">
      <div className="navbar navbar-expand-lg bg-body-tertiary">
        <button type="button" className="btn btn-success ms-auto me-3">
          Add new contact
        </button>
      </div>
      {/* <div className="container">
        <ul>
          <li className="">contacto uno</li>
        </ul>
      </div> */}
      <ul className="list-group list-group-flush container col-8 border border-secondary-subtle">
        <li className="list-group-item">
          <div className="d-flex">
            <div>
              <img
                src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
                className="mx-auto imgsize rounded-circle"
              ></img>
            </div>
            <div className="ms-2 d-felx mt-2">
              <strong>Hard coding contact </strong>
              <div className="d-flex m-0 divsize">
                <i className="fa-solid fa-location-dot greycolor me-2 mt-2 isize"></i>
                <p className="fsize m-1 text-body-secondary">
                  country, city, #####
                </p>
              </div>
              <div className="d-flex m-0 divsize">
                <i className="fa-solid fa-phone greycolor me-2 mt-2 isize"></i>
                <p className="fsize m-1 text-body-secondary">Phone Number###</p>
              </div>
              <div className="d-flex m-0 divsize">
                <i className="fa-solid fa-envelope greycolor me-2 mt-2 isize"></i>
                <p className="fsize m-1 text-body-secondary">email@emai.com</p>
              </div>
            </div>
            <div className="col ms-5">
              <i className="fa-solid fa-trash float-end mt-3"></i>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Home;
