import { Comments } from "./comments";

export interface Product {
    quantity: number;
    id:number,
    name:string,
    price:number,
    description:string,
    photos:string,//[]
    comments:Comments[]
}
export interface Photo {
    id: number;
    url: string;
  }