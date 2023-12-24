 
 export type Product = {
    id:number;
    title:string;
    img:string;
    descp:string;
    price:number;
    quantity?:number;
    stock:string;
    category:{
        type:string;
        img:string
    };
    calories:string;
    isavailable:string
}