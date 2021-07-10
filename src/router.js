import { Link, BrowserRouter, Route, Switch  } from "react-router-dom";
import home from "./components/home";
import logIn from "./components/logIn";
import employeeportal from "./components/employeeportal";
import employeelist from "./components/employeelist"



export const routing = (
  <BrowserRouter>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/home">
        Employeeportal
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/logIn">
              login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/logIn">
              Employeeportal
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/employeelist">
              employeelist
            </Link>
          </li>
          
        </ul>
      </div>
    </nav>

    <Switch>
    <Route path="/" exact>
        {" "}
        <home />{" "}
      </Route>      <Route path="/home" component={home} />
      <Route path="/login" component={logIn} />
      <Route path="/employeeportal" component={employeeportal} />
      <Route path="/employeelist" component={employeelist} />

    </Switch>
  </BrowserRouter>
);
