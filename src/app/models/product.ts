import { Comments } from "./comments";

export interface Product {
    id:number,
    name:string,
    price:number,
    description:string,
    photos:Photo,//[]
    comments:Comments[]
}
export interface Photo {
    id: number;
    url: string;
  }