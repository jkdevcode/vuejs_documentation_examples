import * as yup from "yup";

export const validationSchema = yup.object().shape({
  nombre: yup.string().required("El nombre es requerido"),
  email: yup.string().email("El email es inválido").required("El email es requerido"),
});
