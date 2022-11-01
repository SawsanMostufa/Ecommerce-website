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
        price:number;
        quantity:number;
        productSizes:Size[];
        pictureUrl: string;
        category: string;
        
}
