import { Size } from "./size";

export interface Basket {
    productId: number;
    productName: string;
    // size: string;
    productSizes:Size[];
    price: number;
    quantity: number;
    pictureUrl: string;
    category: string;
}
