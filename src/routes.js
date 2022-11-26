import Dashboard from "views/Dashboard.js";
import Users from "views/Users.js";
import Posts from "views/Posts.js";
import Services from "views/Services.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Users",
    icon: "nc-icon nc-circle-09",
    component: Users,
    layout: "/admin"
  },
  {
    path: "/post",
    name: "Posts",
    icon: "nc-icon nc-notes",
    component: Posts,
    layout: "/admin"
  },
  {
    path: "/service",
    name: "Services",
    icon: "nc-icon nc-paper-2",
    component: Services,
    layout: "/admin"
  }
];

export default dashboardRoutes;
