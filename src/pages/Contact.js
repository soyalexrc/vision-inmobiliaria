import {styled} from "@mui/material/styles";
import Page from "../components/common/Page";
import ContactForm from "../components/forms/ContactForm";

const RootStyle = styled(Page)(({theme}) => ({
  minHeight: "100%",
  alignItems: "center",
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

export default function Contact() {
  return (
    <RootStyle title="Contacto | Vision Inmobiliaria"><ContactForm /></RootStyle>
  )
}
