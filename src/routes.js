/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
//import Dashboard from "views/Dashboard.jsx";
import UserProfile from "views/UserProfile.jsx";
import Usuarios from "./views/Usuarios/Usuarios.jsx";
import Noticias from "./views/Noticias/Noticias.jsx";
import NovaNoticia from "./views/Noticias/NovaNoticia";
import Projetos from "./views/Projetos/Projetos.jsx";
import NovoUsuario from "./views/Usuarios/NovoUsuario";

const dashboardRoutes = [
  /*{
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },*/
  {
    path: "/noticias",
    name: "Notícias",
    icon: "pe-7s-news-paper",
    component: Noticias,
    layout: "/admin"
  },
  {
    path: "/perfil",
    name: "Meu Perfil",
    icon: "pe-7s-user",
    component: UserProfile,
    invisible: true,
    layout: "/admin"
  },
  {
    path: "/usuarios",
    name: "Lista de Usuários",
    icon: "pe-7s-note2",
    component: Usuarios,
    layout: "/admin"
  },
  {
    path: "/novousuario",
    name: "Novo Usuário",
    icon: "pe-7s-note2",
    component: NovoUsuario,
    invisible: true,
    layout: "/admin"
  },
  {
    path: "/novanoticia",
    name: "Notícias",
    icon: "pe-7s-news-paper",
    component: NovaNoticia,
    invisible: true,
    layout: "/admin"
  },
  {
    path: "/projetos",
    name: "Projetos",
    icon: "pe-7s-science",
    component: Projetos,
    layout: "/admin"
  },
];

export default dashboardRoutes;
