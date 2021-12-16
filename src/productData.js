import { uniqueId } from "lodash";
import hoodieImg from "./assets/images/hoodie.png";
import greyHoodieImg from "./assets/images/grey-hoodie.png";

const productData = {
  hoodies: [
    { id: uniqueId("1"), img: hoodieImg, name: "Black Hoodie", price: "$20" },
    { id: uniqueId("1"), img: hoodieImg, name: "Blue Hoodie", price: "$25" },
    { id: uniqueId("1"), img: hoodieImg, name: "Grey Hoodie", price: "$30" },
    { id: uniqueId("1"), img: hoodieImg, name: "Green Hoodie", price: "$35" },
    { id: uniqueId("1"), img: hoodieImg, name: "Red Hoodie", price: "$15" },
    { id: uniqueId("1"), img: hoodieImg, name: "Orange Hoodie", price: "$20" },
    { id: uniqueId("1"), img: hoodieImg, name: "Pink Hoodie", price: "$30" },
    { id: uniqueId("1"), img: hoodieImg, name: "Beige Hoodie", price: "$25" },
  ],
  cardigans: [
    { id: uniqueId("2"), img: greyHoodieImg, name: "Grey Hoodie", price: "$20" },
    { id: uniqueId("2"), img: greyHoodieImg, name: "Grey Hoodie", price: "$20" },
    { id: uniqueId("2"), img: greyHoodieImg, name: "Grey Hoodie", price: "$20" },
    { id: uniqueId("2"), img: greyHoodieImg, name: "Grey Hoodie", price: "$20" },
    { id: uniqueId("2"), img: greyHoodieImg, name: "Grey Hoodie", price: "$20" },
    { id: uniqueId("2"), img: greyHoodieImg, name: "Grey Hoodie", price: "$20" },
    { id: uniqueId("2"), img: greyHoodieImg, name: "Grey Hoodie", price: "$20" },
    { id: uniqueId("2"), img: greyHoodieImg, name: "Grey Hoodie", price: "$20" },
  ],
  jeans: [
    { id: uniqueId("3"), img: hoodieImg, name: "Black Hoodie", price: "$20" },
    { id: uniqueId("3"), img: hoodieImg, name: "Black Hoodie", price: "$20" },
    { id: uniqueId("3"), img: hoodieImg, name: "Black Hoodie", price: "$20" },
    { id: uniqueId("3"), img: hoodieImg, name: "Black Hoodie", price: "$20" },
    { id: uniqueId("3"), img: hoodieImg, name: "Black Hoodie", price: "$20" },
    { id: uniqueId("3"), img: hoodieImg, name: "Black Hoodie", price: "$20" },
    { id: uniqueId("3"), img: hoodieImg, name: "Black Hoodie", price: "$20" },
    { id: uniqueId("3"), img: hoodieImg, name: "Black Hoodie", price: "$20" },
  ],
  jackets: [
    { id: uniqueId("4"), img: greyHoodieImg, name: "Grey Hoodie", price: "$20" },
    { id: uniqueId("4"), img: greyHoodieImg, name: "Grey Hoodie", price: "$20" },
    { id: uniqueId("4"), img: greyHoodieImg, name: "Grey Hoodie", price: "$20" },
    { id: uniqueId("4"), img: greyHoodieImg, name: "Grey Hoodie", price: "$20" },
    { id: uniqueId("4"), img: greyHoodieImg, name: "Grey Hoodie", price: "$20" },
    { id: uniqueId("4"), img: greyHoodieImg, name: "Grey Hoodie", price: "$20" },
    { id: uniqueId("4"), img: greyHoodieImg, name: "Grey Hoodie", price: "$20" },
    { id: uniqueId("4"), img: greyHoodieImg, name: "Grey Hoodie", price: "$20" },
  ],
};

export default productData;
