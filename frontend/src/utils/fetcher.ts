import { api } from ".";
import { AxiosRequestConfig } from "axios";

const fetcher = (url: string, headers: AxiosRequestConfig) =>
    api.get(url, headers).then((response) => response.data);

export default fetcher;
