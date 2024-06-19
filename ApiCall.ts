import axios from "axios";
import "dotenv/config";
import { env } from "process";
export const Call = (route: string, method: string = "get", body = {}) =>
  new Promise(async (resolve, reject) => {
    const Api_Url: string | undefined = env.API_Url;
    if (!Api_Url) throw new Error("API_Url undefined!");
    const res = await axios.request({
      url: Api_Url + route,
      method,
      data: method.toLowerCase() != "get" ? body : undefined,
    });
    const data: any = await res.data;
    const code: number = await res.status;
    const status: string = await res.statusText;
    if (code >= 200 && code <= 299) resolve(data);
    else reject(status);
  });