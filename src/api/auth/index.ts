import { AxiosPromise } from "axios";
import endpoints from "../endpoints";
import { axiosInstance } from "../instance";
import { ILoginRequest, ILoginResponse } from "./types";

export const login = (params: ILoginRequest): AxiosPromise<ILoginResponse> =>
  axiosInstance.post(endpoints.AUTH.LOGIN, params);
