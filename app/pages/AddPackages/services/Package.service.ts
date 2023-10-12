import axios, { AxiosResponse } from "axios";
import { IPackage } from "../interface/Package.interface";
import { ApiResponse } from "@/app/models/ApiResponse.type";

export class PackageService {
    private readonly BASE_URL = '/package';

    public async createPackage(packageData: IPackage): Promise<AxiosResponse> {
        return await axios.post(this.BASE_URL, packageData);
    }

    public async getPackages(): Promise<ApiResponse> {
        const res = await axios.get(this.BASE_URL);
        
        return res.data;
    }
}
