import { useParams } from "react-router-dom";

export const Profile = () => {
  const { idUsuario } = useParams();
  console.log(idUsuario);
  return (
    <div>
      <h1>Perfil de usuario {idUsuario}</h1>
      <h2>Datos de usuario</h2>
    </div>
  );
};
