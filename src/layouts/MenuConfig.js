import { Icon } from "@iconify/react";
import homeFill from "@iconify/icons-eva/home-fill";
import fileFill from "@iconify/icons-eva/file-fill";
import roundGrain from "@iconify/icons-ic/round-grain";
import bookOpenFill from "@iconify/icons-eva/book-open-fill";

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22,
};

const menuConfig = [
  {
    title: "Home",
    icon: <Icon icon={homeFill} {...ICON_SIZE} />,
    svgIcon: '/static/icons/panel-de-control.svg',
    path: "/",
  },
  {
    title: "Servicios",
    icon: <Icon icon={roundGrain} {...ICON_SIZE} />,
    svgIcon: '/static/icons/mejor-precio.svg',
    path: "/servicios",
  },
  {
    title: "Asesores",
    icon: <Icon icon={fileFill} {...ICON_SIZE} />,
    svgIcon: '/static/icons/Maintenance-tools.svg',
    path: "/asesores",
  },
  {
    title: "Alquiler",
    icon: <Icon icon={bookOpenFill} {...ICON_SIZE} />,
    svgIcon: '/static/icons/promesa-de-menique.svg',
    path: "/alquiler",
  },
  {
    title: "Compra",
    icon: <Icon icon={bookOpenFill} {...ICON_SIZE} />,
    svgIcon: '/static/icons/formulario-de-contacto.svg',
    path: "/compra",
  },
  {
    title: "Blog",
    icon: <Icon icon={bookOpenFill} {...ICON_SIZE} />,
    svgIcon: '/static/icons/XMLID_323_.svg',
    path: "/blog",
  },
  {
    title: "Contacto",
    icon: <Icon icon={bookOpenFill} {...ICON_SIZE} />,
    svgIcon: '/static/icons/XMLID_323_.svg',
    path: "/contacto",
  },
];

export default menuConfig;
