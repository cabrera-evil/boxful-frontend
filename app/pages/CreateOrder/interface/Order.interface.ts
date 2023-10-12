import { IPackage } from "../../AddPackages/interface/Package.interface";

export interface IOrder {
    pickupAddress: string;
    scheduledDate: Date;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    deliveryAddress: string;
    department: string;
    municipality: string;
    referencePoint: string;
    specialInstructions: string;
    items: IPackage[];
}