import React, { Fragment, useEffect } from "react";
import Transitions from "~/components/Transitions";
import { useAppDispatch, useAppSelector } from "~/stores";
import { toggleInitializing } from "~/stores/slices/userSlice";
import type { GuardProps } from "~/types/app";

// this can be accessible for all
const PublicGuard: React.FC<GuardProps> = (props): JSX.Element => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(toggleInitializing(true));

    // this setTimeout should be the process of authentication
    // and validation of token from client to server
    // this is only example of an asynchronous process
    setTimeout(() => {
      dispatch(toggleInitializing(false));
    }, 1000);
  }, [dispatch]);

  if (user.initializing) {
    return <Transitions />;
  }

  return <Fragment>{props.children}</Fragment>;
};

export default PublicGuard;
