import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Monilaria moniliforme",
    author: "WalawalaStudio",
    price: 900,
    categoryName: "Handmade",
    rating: 4, 
    description: "Monilaria moniliforme, Rare succulent, 10 seeds", 
    productImage: "https://i.etsystatic.com/14856213/r/il/958eca/1240346069/il_340x270.1240346069_dy0m.jpg"
  },
  {
    _id: uuid(),
    title: "Kooki & Keera",
    author: "Gadgetalicious",
    price: 300,
    categoryName: "Handmade",
    rating: 3, 
    description: "2 Air Plant Holders „Kooki & Keera“ / Kodama Tree Spirit Succulent Planters", 
    productImage: "https://i.etsystatic.com/21599334/r/il/58c2e7/3154479745/il_340x270.3154479745_9r4w.jpg"
  },
  {
    _id: uuid(),
    title: "Mini Garden Fairy",
    author: "Overspeed",
    price: 1257,
    categoryName: "Vintage",
    rating: 5, 
    description: "6pc Mini Fairies Mini Garden Fairy Garden Accessories", 
    productImage: "https://i.etsystatic.com/7202160/r/il/ad8ca4/1146706082/il_340x270.1146706082_1ior.jpg"
  },
];
