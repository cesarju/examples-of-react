import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navegacion = useNavigate();
  const handleNavigate = () => {
    navegacion("/user");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleNavigate}>Ir a perfil de usuario</button>
    </div>
  );
};
