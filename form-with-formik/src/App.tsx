import { InputField } from "./components/InputField";
import { useFormik, FormikProps } from "formik";
import "./App.css";
/*
  Form
    name
    lastName
    languageList -> language, level

  Print the data that is going to be sent to the server

  1. revisar los archivos que estan en el proyecto ✅
  2. Crear un componente con nombre InputField que soporte 
  un input
  3. Usar el componente InputField para recibir los datos 
  (name, lastName, LanguageList)
  4. Crear un boton que imprima por consola los 
  datos de los componentes
*/

interface UserValues {
  name: string;
  lastName: string;
}

export default function App() {
  const formik: FormikProps<UserValues> = useFormik<UserValues>({
    initialValues: {
      name: "",
      lastName: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form className="App" onSubmit={formik.handleSubmit}>
      <InputField
        label="Name"
        value={formik.values.name}
        onChange={(val) => formik.setFieldValue("name", val)}
      />
      <br />
      <InputField
        label="Last Name"
        value={formik.values.lastName}
        onChange={(val) => formik.setFieldValue("lastName", val)}
      />
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}
