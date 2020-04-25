import { Product } from "./product";
import { Clothing } from "./clothing";
import { Collection } from "./collection";
import { Shoes } from "./shoes";
import { Accessories } from "./accessories";

export const PRODUCTS: Product[] = [
]
Shoes.forEach(addProduct);
Clothing.forEach(addProduct);
Collection.forEach(addProduct);
Accessories.forEach(addProduct);

function addProduct(product:Product):void {
    PRODUCTS.push(product);
}