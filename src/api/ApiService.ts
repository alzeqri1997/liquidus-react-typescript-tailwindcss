import axios from "axios";
import { Header, Type, Method, Status, BASE_URL } from "./http";

axios.defaults.baseURL = BASE_URL;

export class ApiService<T>{
  public async get<T>(url: string, body?: object | FormData): Promise<any> {
    return this.send(Method.Get, url, body)
  }
  private async send<T>(
    method: Method,
    url: string,
    body?: object | FormData
  ): Promise<any> {

    const options = {
      method: method,
      data: body,
      url: url
    }

    let res;
    await axios(options)
      .then((response) => {
        res = response;
      })
      .catch((error) => {
        res = Promise.reject(error.response);
      });

    return res;
  }
}