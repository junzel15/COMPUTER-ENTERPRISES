import Home from "./views/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Contactus from "./views/Contactus";
import Laptops from "./views/Laptops";
import Desktop from "./views/Desktop";
import GamingLaptops from "./components/GamingLaptops";
import Cart from "./components/Cart";

const routes = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    name: "Login",
    path: "/login",
    element: <Login />,
  },
  {
    name: "Signup",
    path: "/signup",
    element: <Signup />,
  },
  {
    name: "Contactus",
    path: "/contactus",
    element: <Contactus />,
  },
  {
    name: "Laptops",
    path: "/laptops",
    element: <Laptops />,
  },
  {
    name: "Desktop",
    path: "/desktop",
    element: <Desktop />,
  },
  {
    name: "GamingLaptops",
    path: "/gaminglaptops",
    element: <GamingLaptops />,
  },
  {
    name: "Cart",
    path: "/cart",
    element: <Cart />,
  },
];

export default routes;
