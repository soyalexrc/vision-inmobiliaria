import * as Yup from "yup";



// ------------------------------------------ //

const yearRegExp = /^(17|18|19|20)\d{2}$/;

// ------------------------------------------ //

export const ContactSchema = Yup.object().shape({
  Nombre: Yup.string().required("Este campo es requerido"),
  Apellido: Yup.string().required("Este campo es requerido"),
  Email: Yup.string().email('Ingresa un email válido').required("Este campo es requerido"),
  Telefono_Contacto: Yup.number().required("Este campo es requerido"),
  Comentarios: Yup.string(),
  Accion_Realizar: Yup.string().required("Este campo es requerido")
});

export const ContactServiceSchema = Yup.object().shape({
  Nombre: Yup.string().required("Este campo es requerido"),
  Apellido: Yup.string().required("Este campo es requerido"),
  Email: Yup.string().email('Ingresa un email válido').required("Este campo es requerido"),
  Telefono_Contacto: Yup.number().required("Este campo es requerido"),
  Comentarios: Yup.string(),
  Empresa: Yup.string().required('Este campo es requerido'),
  Servicio: Yup.string().required("Este campo es requerido")
});

export const NotifyMeSchema = Yup.object().shape({
  Nombre: Yup.string().required("Este campo es requerido"),
  Apellido: Yup.string().required("Este campo es requerido"),
  Email: Yup.string().email('Ingresa un email válido').required("Este campo es requerido"),
  Telefono_Contacto: Yup.number().required("Este campo es requerido"),
  Empresa: Yup.string().required('Este campo es requerido'),
  Maquina: Yup.string().required("Este campo es requerido"),
  Accion_Realizar: Yup.string().required("Este campo es requerido"),
  terms: Yup.boolean().oneOf([true]).required('Este campo es requerido')
});


export const SellSChema = Yup.object().shape({
  Nombre: Yup.string().required("Este campo es requerido"),
  Apellido: Yup.string().required("Este campo es requerido"),
  Telefono_Contacto: Yup.number().required("Este campo es requerido"),
  Email: Yup.string().email("Ingresa un email válido").required("Este campo es requerido"),
  Tipo_Maquina: Yup.string().required("Este campo es requerido"),
  Marca_Maquina: Yup.string().required("Este campo es requerido"),
  Modelo_Maquina: Yup.string().required("Este campo es requerido"),
  Fecha_Fabricacion: Yup.string().matches(yearRegExp, 'Ingresa un año válido').required("Este campo es requerido"),
  terms: Yup.boolean().oneOf([true], 'Accept Terms & Conditions is required')
});

export const OrderSchema = Yup.object().shape({
  Nombre: Yup.string().required("Este campo es requerido"),
  Apellido: Yup.string().required("Este campo es requerido"),
  Empresa: Yup.string().required('Este campo es requerido'),
  Maquina: Yup.string().required('Este campo es requerido'),
  Telefono_Contacto: Yup.number().required("Este campo es requerido"),
  Email: Yup.string().email("Ingresa un email válido").required("Este campo es requerido"),
  terms: Yup.boolean().oneOf([true], 'Accept Terms & Conditions is required')
});

export const ReserveFormSchema = Yup.object().shape({
  Nombre: Yup.string().required("Este campo es requerido"),
  Apellido: Yup.string().required("Este campo es requerido"),
  Telefono_Contacto: Yup.number().required("Este campo es requerido"),
  Email: Yup.string().email('Ingresa un email válido').required("Este campo es requerido"),
  Empresa: Yup.string().required('Este campo es requerido'),
  Industria: Yup.string().required('Este campo es requerido'),
  Maquina: Yup.string().required('Este campo es requerido'),
  Comentarios: Yup.string(),
  Accion_Realizar: Yup.string().required('Este campo es requerido'),
  terms: Yup.boolean().oneOf([true], 'Accept Terms & Conditions is required')
});

export const CartSchema = Yup.object().shape({
  Nombre: Yup.string().required("Este campo es requerido"),
  Apellido: Yup.string().required("Este campo es requerido"),
  Industria: Yup.string().required("Este campo es requerido"),
  Empresa: Yup.string().required("Este campo es requerido"),
  Email: Yup.string().email('Ingresa un email válido').required("Este campo es requerido"),
  // Productos: Yup.array(),
  // Servicios: Yup.array(),
  Telefono_Contacto: Yup.number().required("Este campo es requerido"),
})

export const CartStepOneSchema = Yup.object().shape({
  Nombre: Yup.string().required("Este campo es requerido"),
  Apellido: Yup.string().required("Este campo es requerido"),
  Productos: Yup.array(),
  Servicios: Yup.array(),
  Email: Yup.string().email('Ingresa un email válido').required("Este campo es requerido"),
  Telefono_Contacto: Yup.number().required("Este campo es requerido"),
});

//------------------------- ADMIN ----------------------//

export const LoginSchema = Yup.object().shape({
  Correo: Yup.string().email('ingresa un correo válido!').required('Este campo es requerido'),
  Password: Yup.string().required('Este campo es requerido'),
})

export const SeoFormSchema = Yup.object().shape({
  title: Yup.string().required('Este campo es requerido'),
  metaDescription: Yup.string().required('Este campo es requerido'),
  h1: Yup.string().required('Este campo es requerido'),
  h2: Yup.string().required('Este campo es requerido'),
  h3: Yup.string().required('Este campo es requerido'),
})

export const MainBannerFormSchema = Yup.object().shape({
  Img_Desktop: Yup.string().required('Este campo es requerido'),
  Img_Mobile: Yup.string().required('Este campo es requerido'),
  videoUrl: Yup.string(),
  Link_Redireccion: Yup.string().required('Este campo es requerido'),
  title: Yup.string().required('Este campo es requerido'),
  subtitle: Yup.string().required('Este campo es requerido'),
  alt: Yup.string().required('Este campo es requerido'),
})

export const RegularBannerSchema = Yup.object().shape({
  Img_Desktop: Yup.string().required('Este campo es requerido'),
  Img_Mobile: Yup.string().required('Este campo es requerido'),
  // Link_Redireccion: Yup.string().required('Este campo es requerido'),
  // title: Yup.string().required('Este campo es requerido'),
  // subtitle: Yup.string().required('Este campo es requerido'),
  alt: Yup.string().required('Este campo es requerido'),
})

export const TestimonyFormSchema = Yup.object().shape({
  Imagen_Persona: Yup.string().required('Este campo es requerido'),
  Titulo: Yup.string().required('Este campo es requerido'),
  Nombre_Persona: Yup.string().required('Este campo es requerido'),
  Testimonio_Persona: Yup.string().required('Este campo es requerido'),
  // alt: Yup.string().required('Este campo es requerido'),
  alt: Yup.string(),
})

export const PromiseCardSchema = Yup.object().shape({
  Img: Yup.string().required('Este campo es requerido'),
  title: Yup.string().required('Este campo es requerido'),
  description: Yup.string().required('Este campo es requerido'),
})

export const AboutUsEditorSchema = Yup.object().shape({
  text: Yup.string().required('Este campo es requerido'),
})

export const CreateNewFormSchema = Yup.object().shape({
  title: Yup.string().required('Este campo es requerido'),
  alt: Yup.string().required('Este campo es requerido'),
  keywords: Yup.string().required('Este campo es requerido'),
})

export const EmailSchema = Yup.object().shape({
  Email: Yup.string().required('Este campo es requerido'),
})

export const QuestionSchema = Yup.object().shape({
  Titulo: Yup.string().required('Este campo es requerido'),
})
