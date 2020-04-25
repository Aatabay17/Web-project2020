import { Category } from "./category";
import { Product } from "./product";
import { Clothing } from "./clothing";
import { Collection } from "./collection";
import { Shoes } from "./shoes";
import { Accessories } from "./accessories";

export const CATEGORIES: Category[] = [
    {
        id: 1, 
        name: 'SHOES',
        products: Shoes
    },
    {
        id: 2, 
        name: 'CLOTHING',
        products: Clothing
    },
    {
        id: 3, 
        name: 'ACCESSORIES & EQUIPMENT',
        products: Accessories
    },
    {
        id: 4, 
        name: 'SHOP COLLECTION',
        products: Collection
    }
]