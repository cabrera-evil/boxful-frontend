import axios, { AxiosResponse } from "axios";
import { IOrder } from "../interface/Order.interface";
import { ApiResponse } from "@/app/models/ApiResponse.type";

export class OrderService {
    private readonly BASE_URL = '/orders';

    public async createOrder(order: IOrder): Promise<AxiosResponse> {
        return await axios.post(this.BASE_URL, order);
    }

    public async getOrders(): Promise<ApiResponse> {
        return await axios.get(this.BASE_URL);
    }
}
