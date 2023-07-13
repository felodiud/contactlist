import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

function Login() {
  return (
    <div className="container">
      <div className="mt-1">
        <label for="inputPassword5" class="form-label">
          Full Name
        </label>
        <input
          type="text"
          id="inputPassword5"
          class="form-control"
          aria-labelledby="passwordHelpBlock"
          placeholder="Full Name"
        />
      </div>
      <div className="mt-1">
        <label for="inputPassword5" class="form-label">
          Email
        </label>
        <input
          type="text"
          id="inputPassword5"
          class="form-control"
          aria-labelledby="passwordHelpBlock"
          placeholder="Enter Email"
        />
      </div>
      <div className="mt-1">
        <label for="inputPassword5" class="form-label">
          Phone
        </label>
        <input
          type="text"
          id="inputPassword5"
          class="form-control"
          aria-labelledby="passwordHelpBlock"
          placeholder="Enter Phone"
        />
      </div>
      <div className="mt-1">
        <label for="inputPassword5" class="form-label">
          Adress
        </label>
        <input
          type="text"
          id="inputPassword5"
          class="form-control"
          aria-labelledby="passwordHelpBlock"
          placeholder="Enter Adress"
        />
      </div>
      <div className="d-grid gap-2 mx-auto mt-2">
        <button className="btn btn-primary" type="button">
          save
        </button>
      </div>
      <p> or go back to contacts </p>
    </div>
  );
}

export default Login;
