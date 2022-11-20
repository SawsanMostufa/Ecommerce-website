
import { Size } from "./size";

export interface Basket {
    productId: number;
    productName: string;
    productSizes:Size[];
    price: number;
    quantity: number;
    pictureUrl: string;
    category: string;
}
export interface IBasket {
    id: number;
    items: Basket[];
}
// export class Baskets {
//     id: number=0;
//     items: Basket[]=[];
// }
export class BasketLis implements IBasket{
    id:number = 0;
    items: Basket[] = [];

    BasketLis(){
        debugger
       this.id++;
    }
   
}