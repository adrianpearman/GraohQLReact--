// NPM Modules
import { Link } from "react-router-dom";
// Assets
import logo from "../assets/spacex.png";

const Naviagtion = () => {
  return (
    <div>
      <Link to="/">
        <img
          src={logo}
          alt="SpaceX Logo"
          style={{ width: 300, display: "block", margin: "auto" }}
        />
      </Link>
    </div>
  );
};

export default Naviagtion;
