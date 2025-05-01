import { NavLink } from "react-router";

export default Navigation = () => {
  return (
    <nav className="container-fluid">
      <ul>
        <li><strong>Acme Corp</strong></li>
      </ul>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/admin">Admin</NavLink></li>
      </ul>
    </nav>
  );
};
