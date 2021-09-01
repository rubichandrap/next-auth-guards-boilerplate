import { AxiosResponse } from "axios";
import service from "./baseService";

const userService = {
  login: (payload: {
    email: string;
    password: string;
  }): Promise<AxiosResponse<{ email: string }>> =>
    service.post("login", payload).then((res) => res),
};

export default userService;
