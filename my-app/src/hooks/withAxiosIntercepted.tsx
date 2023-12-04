import { useEffect, useState } from "react";
import axios, {InternalAxiosRequestConfig} from "axios";
import {ACCESS_TOKEN} from "../constans/constans";


export const authorizedApi = axios.create();

export function withAxiosIntercepted<T extends JSX.IntrinsicAttributes>(
  Component: React.ComponentType<T>
) {
  return function AxiosIntercepted(props: T) {
    const [isInitialized, setIsInitialized] = useState<boolean>(false);

    useEffect(() => {
      axios.interceptors.request.use((config: InternalAxiosRequestConfig) => {
        return {
          ...config,
          baseURL: process.env.REACT_APP_API_URL,
        };
      });

      authorizedApi.interceptors.request.use((config: InternalAxiosRequestConfig) => {
        if (config?.headers) {
          config.headers["Authorization"] = `Bearer ${localStorage.getItem(
            ACCESS_TOKEN
          )}`;
        }

        return {
          ...config,
          baseURL: process.env.REACT_APP_API_URL,
        };
      });

      authorizedApi.interceptors.response.use(
        (response) => {
          return response;
        },
        (error) => {

          return Promise.reject(error);
        }
      );

      setIsInitialized(true);
    }, []);

    return isInitialized ? <Component {...props} /> : <></>;
  };
}
