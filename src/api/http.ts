import { Coffee } from "../models/Coffee";
import { axiosClient } from "./axios.config";

export class Http {
  static async getCoffees() {
    const response = await axiosClient.get<Coffee[]>("/");
    console.log(response);
    return response.data;
  }
}
