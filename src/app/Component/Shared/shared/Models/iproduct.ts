
import { Size } from "./size";
export interface Iproduct {
    id: number;
    name: string;
    description: string;
    price: number;
    pictureUrl: string;
    category: string;
    categoryID: number;
    quantity: number;
    productSizes: Size[];
}
export class Product {
    id: number = 0;
    name: string = "";
    categoryId: number = 0;
    quantity: number = 0;
    description: string = "";
    pictureUrl: string = "";
    productSizes: Size[] = [];

}

