import { useRouter } from "next/router";
import React, { Fragment, useEffect } from "react";
import Transitions from "~/components/Transitions";
import { useAppDispatch, useAppSelector } from "~/stores";
import { toggleInitializing } from "~/stores/slices/userSlice";
import type { GuardProps } from "~/types/app";

// this component protected some pages from client side
// that needs to be authed before accessed
const ProtectedGuard: React.FC<GuardProps> = (props): JSX.Element | null => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const router = useRouter();

  useEffect(() => {
    dispatch(toggleInitializing(true));
    // this setTimeout should be the process of authentication
    // and validation of token from client to server
    // this is only example of an asynchronous process
    setTimeout(() => {
      dispatch(toggleInitializing(false));
    }, 1000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!user.isLoggedIn) {
      router.push({
        pathname: "/login",
        query: {
          message: "You have to login first",
        },
      });
    }
  }, [router, user]);

  if (user.initializing) {
    return <Transitions />;
  }

  if (!user.initializing && user.isLoggedIn) {
    return <Fragment>{props.children}</Fragment>;
  }

  return null;
};

export default ProtectedGuard;
