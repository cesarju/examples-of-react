import { NavLink as NavLinkDecoration } from "react-router-dom";
import "./styleNavLink.css";

const NavLink = ({ to, children }) => {
  return (
    <NavLinkDecoration
      className={({ isActive }) => (isActive ? "active" : "no-active")}
      to={to}
    >
      {children}
    </NavLinkDecoration>
  );
};

export const LinkRouter = () => {
  return (
    <div>
      <h1>Bookerpeper</h1>
      <NavLink to="/inovation">Inovation</NavLink> | {""}
      <NavLink to="/expenses">Expenses</NavLink> | {""}
      <NavLink to="/user">Usuarios</NavLink> | {""}
      <NavLink to="/dashboard">Dashboard</NavLink> | {""}
    </div>
  );
};
