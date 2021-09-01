import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import routes from "~/routes";
import { useAppDispatch, useAppSelector } from "~/stores";
import { setUserData, toggleLogin } from "~/stores/slices/userSlice";

const Layout: React.FC = (props): JSX.Element => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(setUserData({}));
    dispatch(toggleLogin());
    router.push("/");
  };

  return (
    <div className="container">
      <div className="mb-3">
        {routes.map((route, i) =>
          user.isLoggedIn && route.path === "/login" ? (
            <a key={i} className="btn btn-link" href="#" onClick={handleLogout}>
              Logout
            </a>
          ) : (
            <Link key={i} href={route.path}>
              <a className="btn btn-link">{route.name}</a>
            </Link>
          )
        )}
      </div>
      {props.children}
    </div>
  );
};

export default Layout;
