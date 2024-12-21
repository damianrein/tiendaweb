export interface Product {
    id:number,
    name:string,
    price:number,
    description:string,
    photos:Photo//[]
}
export interface Photo {
    id: number;
    url: string;
   // description?: string;
  }