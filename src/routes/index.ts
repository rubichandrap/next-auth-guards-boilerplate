type Route = {
  path: string;
  name: string;
  title: string;
  children: Route[] | [];
};

// this is testing only variable
const routes: Readonly<Route[]> = [
  {
    path: "/",
    name: "Home",
    title: "This is Home",
    children: [],
  },
  {
    path: "/some-protected-page",
    name: "Some Protected Page",
    title: "This is Protected Page",
    children: [],
  },
  {
    path: "/login",
    name: "Login",
    title: "This is Login",
    children: [],
  },
];

export default routes;
