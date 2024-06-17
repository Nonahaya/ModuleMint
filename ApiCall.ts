import "dotenv/config";
import axios from "axios";

export const Call = (route: string, method: string = "get", body: any = {}) =>
  new Promise(async (resolve, reject) => {
    const api_url: string | undefined = process.env.API_Url;
    if (!api_url) throw new Error("API_Url Undefined!");
    const res = await axios.request({
      url: api_url + route,
      method,
      data: method.toLowerCase() != "get" ? body : undefined,
    });
    const data: any = await res.data;
    const code: number = await res.status;
    if (code == 200) resolve(data);
    else reject(false);
  });