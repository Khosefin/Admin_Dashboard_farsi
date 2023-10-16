import Users from "./components/Users";
import Comments from "./components/Comments";
import Orders from "./components/Orders";
import Offers from "./components/Offers";
import Products from "./components/Products";

const routes = [
  { path: "/products", element: <Products /> },
  { path: "/comments", element: <Comments /> },
  { path: "/users", element: <Users /> },
  { path: "/orders", element: <Orders /> },
  { path: "/offers", element: <Offers /> },
];

export default routes;
