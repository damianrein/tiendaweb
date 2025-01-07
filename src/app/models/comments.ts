import { User } from "./user";

export interface Comments {
    id:number,
    user:User,
    message:string,
    stars:number
}
