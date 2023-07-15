import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Home() {
  // const handleonclick = () => {
  //   <Link to="/Login"></Link>;
  // };

  const [agenda, setAgenda] = useState([]);
  const [uservalue, setUservalue] = useState("");
  const [inputvalue, setInputvalue] = useState("");

  const handlegetagenda = () => {
    getFetch();
    console.log(agenda);
  };

  // my agneda link https://assets.breatheco.de/apis/fake/contact/agenda/feloman_agenda
  const getFetch = () => {
    fetch(`https://assets.breatheco.de/apis/fake/contact/agenda/feloman_agenda`)
      .then((res) => res.json())
      .then((result) => setAgenda(result));
  };

  const delfetch = (object) => {
    fetch(`https://assets.breatheco.de/apis/fake/contact/${object}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getFetch();
  }, []);

  return (
    <div className="mt-2">
      <div className="navbar navbar-expand-lg bg-body-tertiary">
        {/* <input
          type="text"
          placeholder="agenda name"
          className="ms-3"
          value={uservalue}
          onChange={(valor) => setUservalue(valor.target.value)}
        ></input>
        <button
          type="button"
          className=" ms-4 btn btn-success"
          onClick={() => {
            handlegetagenda();
          }}
        >
          get agenda
        </button> */}
        <Link to="/login" className="btn btn-success ms-auto me-3">
          <button type="button" className="btn btn-success ms-auto me-3">
            Add new contact
          </button>
        </Link>
      </div>
      {/* <div className="container">
        <ul>
          <li className="">contacto uno</li>
        </ul>
      </div> */}
      <ul className="list-group list-group-flush container col-8 border border-secondary-subtle mt-5">
        {agenda.map((item, index) => (
          <li className="list-group-item" key={index}>
            <div className="d-flex">
              <div>
                <img
                  src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
                  className="mx-auto imgsize rounded-circle"
                ></img>
              </div>
              <div className="ms-2 d-felx mt-2">
                <strong>{item.full_name} </strong>
                <div className="d-flex m-0 divsize">
                  <i className="fa-solid fa-location-dot greycolor me-2 mt-2 isize"></i>
                  <p className="fsize m-1 text-body-secondary">
                    {item.address}
                  </p>
                </div>
                <div className="d-flex m-0 divsize">
                  <i className="fa-solid fa-phone greycolor me-2 mt-2 isize"></i>
                  <p className="fsize m-1 text-body-secondary">{item.phone}</p>
                </div>
                <div className="d-flex m-0 divsize">
                  <i className="fa-solid fa-envelope greycolor me-2 mt-2 isize"></i>
                  <p className="fsize m-1 text-body-secondary">{item.email}</p>
                </div>
              </div>
              <div className="col ms-5">
                <i
                  className="fa-solid fa-trash float-end mt-3"
                  onClick={() => delfetch(item.id)}
                ></i>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
