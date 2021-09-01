import { useRouter } from "next/router";
import React, { useState } from "react";
import { RedirectGuard } from "~/guards";
import userService from "~/services/userService";
import { useAppDispatch } from "~/stores";
import { setUserData, toggleLogin } from "~/stores/slices/userSlice";
import { GuardedNextPage } from "~/types/app";

type LoginState = {
  email: string;
  password: string;
};

const Login: GuardedNextPage = (): JSX.Element => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [state, setState] = useState<LoginState>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await userService.login(state);
      dispatch(setUserData(res.data));
      dispatch(toggleLogin());
      router.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>This is Login Page</h1>

      <form className="mb-2" onSubmit={handleLogin}>
        <div className="mb-3">
          <label className="d-block">Email</label>
          <input
            name="email"
            value={state.email}
            type="text"
            placeholder="email"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="d-block">Password</label>
          <input
            name="password"
            value={state.password}
            type="password"
            placeholder="*****"
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-secondary">
          Login
        </button>
      </form>

      {router.query.message && (
        <p className="mt-3 text-danger">{router.query.message}</p>
      )}
    </div>
  );
};

Login.guard = RedirectGuard;

export default Login;
