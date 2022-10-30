import { Size } from "./size";

export interface IOrderToCreate {
    orderItems: IOrderItem[];
}

export interface Iorder {
    id: number;
    userId: string;
    username: string;
    orderDate: Date;
    totalAmount: number;
    orderItems: IOrderItem[];
}

export interface IOrderItem {
        productId: number;
        productName: string;
        pictureUrl: string;
        productSizes:Size[];
        price: number;
        quantity: number;
        
}
