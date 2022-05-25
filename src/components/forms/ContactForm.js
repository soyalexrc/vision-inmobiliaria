import {Field, Form, FormikProvider, useFormik} from "formik";

// material
import {Box, Button, Container, TextField, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import {ContactSchema} from "../../utils/formSchemas";
import useSendForms from "../../hooks/useSendForms";

// ----------------------------------------------------------------------

const RadioContainer = styled('div')(({theme}) => ({
  display: 'flex',
  "& label" : {
    display: 'flex',
    alignItems: 'center',
    padding: '0 .5rem'
  },
  "& input[type='radio']": {
    appearance: 'none',
    backgroundColor: '#fff',
    margin: 0,
    font: 'inherit',
    color: theme.palette.primary.main,
    width: '1.35em',
    height: '1.35em',
    border: `0.15em solid gray`,
    borderRadius: '50%',
    display: 'grid',
    placeContent: 'center'
  },

  "& input[type='radio']::before": {
    content: "''",
    width: '0.55em',
    height: '0.55em',
    borderRadius: '50%',
    transform: 'scale(0)',
    transition: '120ms transform ease-in-out',
    boxShadow: `inset 1em 1em ${theme.palette.primary.main}`,
  },

  "& input[type='radio']:checked::before": {
    transform: 'scale(1)',
  }

}))

// ----------------------------------------------------------------------

export default function ContactForm() {
  const { send } = useSendForms('', false)


  const formik = useFormik({
    initialValues: {
      Nombre: "",
      Apellido: "",
      Email: "",
      Telefono_Contacto: "",
      Comentarios: "",
      Accion_Realizar: "",
    },
    validationSchema: ContactSchema,
    onSubmit: async (values, {setSubmitting, resetForm}) => {
      try {
        setSubmitting(true);
        await send(values);
        setSubmitting(false);
        resetForm();
      } catch (error) {
        console.error(error);
        resetForm();
        setSubmitting(false);
      }
    },
  });


  const {errors, touched, isSubmitting, handleSubmit, getFieldProps, isValid} = formik;


  return (
    <Container sx={{py: {xs: 5, md: 10}}}>
      <Box maxWidth={800} width="100%" display="block" mx="auto">
        <Typography variant="h2" sx={{mb: 2}} >
          Contacto
        </Typography>
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Typography variant="body1">Nombre *</Typography>
            <TextField
              fullWidth
              type="text"
              {...getFieldProps("Nombre")}
              size="small"
              placeholder="Escribir texto"
              error={Boolean(touched.Nombre && errors.Nombre)}
              helperText={touched.Nombre && errors.Nombre}
              sx={{mb: 2}}
            />

            <Typography variant="body1">Apellido *</Typography>
            <TextField
              fullWidth
              type="text"
              {...getFieldProps("Apellido")}
              size="small"
              placeholder="Escribir texto"
              error={Boolean(touched.Apellido && errors.Apellido)}
              helperText={touched.Apellido && errors.Apellido}
              sx={{mb: 2}}
            />

            <Typography variant="body1">Teléfono de contacto *</Typography>
            <TextField
              fullWidth
              type="number"
              {...getFieldProps("Telefono_Contacto")}
              size="small"
              placeholder="+ 56 9 0000 0000"
              error={Boolean(touched.Telefono_Contacto && errors.Telefono_Contacto)}
              helperText={touched.Telefono_Contacto && errors.Telefono_Contacto}
              sx={{mb: 2}}
            />

            <Typography variant="body1">Email *</Typography>
            <TextField
              fullWidth
              type="text"
              {...getFieldProps("Email")}
              size="small"
              placeholder="mail@ejemplo.com"
              error={Boolean(touched.Email && errors.Email)}
              helperText={touched.Email && errors.Email}
              sx={{mb: 2}}
            />

            <Typography variant="body1" sx={{ mb: 2 }}>¿Qué deseas realizar? *</Typography>
            <Box sx={{display: 'flex', flexDirection: 'column', mb: 2}}>
              <RadioContainer role="group" aria-labelledby="my-radio-group">
                <label>
                  <Field style={{ marginRight: '0.3rem' }} type="radio" name="Accion_Realizar" value="Vender"/>
                  Vender
                </label>
                <label>
                  <Field style={{ marginRight: '0.3rem' }} type="radio" name="Accion_Realizar" value="Arrendar"/>
                  Arrendar
                </label>
                <label>
                  <Field style={{ marginRight: '0.3rem' }} type="radio" name="Accion_Realizar" value="Comprar"/>
                  Comprar
                </label>
              </RadioContainer>
              {errors.Accion_Realizar && touched.Accion_Realizar &&
                <Typography variant='caption' color='#FF4842'>Este campo es requerido</Typography>}
            </Box>

            <Typography variant="body1">Comentarios</Typography>
            <TextField
              fullWidth
              type="text"
              {...getFieldProps("Comentarios")}
              size="small"
              placeholder="Escribir texto"
              error={Boolean(touched.Comentarios && errors.Comentarios)}
              helperText={touched.Comentarios && errors.Comentarios}
              sx={{mb: 3}}
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              disabled={isSubmitting || !isValid}
              sx={{display: "block", mx: "auto"}}
            >
              {isSubmitting && 'Enviando...'}
              {!isSubmitting  && 'Go!'}
            </Button>
          </Form>
        </FormikProvider>
      </Box>
    </Container>
  );
}
