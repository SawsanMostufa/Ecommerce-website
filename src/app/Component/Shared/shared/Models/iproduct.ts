
import { Size } from "./size";
export interface Iproduct {
    id: number;
    name: string;
    description: string;
    price: number;
    // discount: number;
    pictureUrl: string;
    category: string;
    categoryID:number;
     quantity: number;
    productSizes:Size[];
}


