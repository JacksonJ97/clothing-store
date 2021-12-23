import { uniqueId } from "lodash";
import blackHoodieImg from "./assets/images/black-hoodie.png";
import greyHoodieImg from "./assets/images/grey-hoodie.png";
import darkGrayHoodieImg from "./assets/images/dark-gray-hoodie.png";
import nikeHoodieImg from "./assets/images/nike-hoodie.png";
import sidemenHoodieImg from "./assets/images/sidemen-hoodie.png";
import gilbertHoodieImg from "./assets/images/gilbert-hoodie.png";
import christmasSweaterImg from "./assets/images/christmas-sweater.png";
import diamondSweaterImg from "./assets/images/diamond-sweater.png";
import blueSweaterImg from "./assets/images/blue-sweater.png";
import graySweaterImg from "./assets/images/gray-sweater.png";
import redSweaterImg from "./assets/images/red-sweater.png";
import blackSweaterImg from "./assets/images/black-sweater.png";
import blackJeansImg from "./assets/images/black-jeans.png";
import blackPantsImg from "./assets/images/black-pants.png";
import nikePantsImg from "./assets/images/nike-pants.png";
import adidasPantsImg from "./assets/images/adidas-pants.png";
import greenPantsImg from "./assets/images/green-pants.png";
import underArmourPantsImg from "./assets/images/under-armour-pants.png";
import leatherJacketImg from "./assets/images/leather-jacket.png";
import greenJacketImg from "./assets/images/green-jacket.png";
import lightGreenJacketImg from "./assets/images/light-green-jacket.png";
import grayJacketImg from "./assets/images/gray-jacket.png";
import redJacketImg from "./assets/images/red-jacket.png";
import blueJacketImg from "./assets/images/blue-jacket.png";

const productData = {
  hoodies: [
    {
      id: uniqueId("1"),
      img: blackHoodieImg,
      name: "Black Hoodie",
      price: 20,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat tempus laoreet. Suspendisse dignissim odio ac nisi consequat lacinia. Fusce posuere a augue sed venenatis.",
    },
    {
      id: uniqueId("1"),
      img: greyHoodieImg,
      name: "Gray Hoodie",
      price: 25,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat tempus laoreet. Suspendisse dignissim odio ac nisi consequat lacinia. Fusce posuere a augue sed venenatis.",
    },
    {
      id: uniqueId("1"),
      img: darkGrayHoodieImg,
      name: "Dark Gray Hoodie",
      price: 30,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat tempus laoreet. Suspendisse dignissim odio ac nisi consequat lacinia. Fusce posuere a augue sed venenatis.",
    },
    {
      id: uniqueId("1"),
      img: nikeHoodieImg,
      name: "Nike Hoodie",
      price: 35,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat tempus laoreet. Suspendisse dignissim odio ac nisi consequat lacinia. Fusce posuere a augue sed venenatis.",
    },
    {
      id: uniqueId("1"),
      img: sidemenHoodieImg,
      name: "Sidemen Hoodie",
      price: 15,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat tempus laoreet. Suspendisse dignissim odio ac nisi consequat lacinia. Fusce posuere a augue sed venenatis.",
    },
    {
      id: uniqueId("1"),
      img: gilbertHoodieImg,
      name: "Gilbert Hoodie",
      price: 20,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat tempus laoreet. Suspendisse dignissim odio ac nisi consequat lacinia. Fusce posuere a augue sed venenatis.",
    },
  ],
  "cardigans&sweaters": [
    {
      id: uniqueId("2"),
      img: christmasSweaterImg,
      name: "Christmas Sweater",
      price: 20,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat tempus laoreet. Suspendisse dignissim odio ac nisi consequat lacinia. Fusce posuere a augue sed venenatis.",
    },
    {
      id: uniqueId("2"),
      img: diamondSweaterImg,
      name: "Diamond Sweater",
      price: 25,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat tempus laoreet. Suspendisse dignissim odio ac nisi consequat lacinia. Fusce posuere a augue sed venenatis.",
    },
    {
      id: uniqueId("2"),
      img: blueSweaterImg,
      name: "Blue Sweater",
      price: 30,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat tempus laoreet. Suspendisse dignissim odio ac nisi consequat lacinia. Fusce posuere a augue sed venenatis.",
    },
    {
      id: uniqueId("2"),
      img: graySweaterImg,
      name: "Gray Sweater",
      price: 35,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat tempus laoreet. Suspendisse dignissim odio ac nisi consequat lacinia. Fusce posuere a augue sed venenatis.",
    },
    {
      id: uniqueId("2"),
      img: redSweaterImg,
      name: "Red Sweater",
      price: 15,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat tempus laoreet. Suspendisse dignissim odio ac nisi consequat lacinia. Fusce posuere a augue sed venenatis.",
    },
    {
      id: uniqueId("2"),
      img: blackSweaterImg,
      name: "Black Sweater",
      price: 20,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat tempus laoreet. Suspendisse dignissim odio ac nisi consequat lacinia. Fusce posuere a augue sed venenatis.",
    },
  ],
  "jeans&pants": [
    {
      id: uniqueId("3"),
      img: blackJeansImg,
      name: "Black Jeans",
      price: 20,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat tempus laoreet. Suspendisse dignissim odio ac nisi consequat lacinia. Fusce posuere a augue sed venenatis.",
    },
    {
      id: uniqueId("3"),
      img: blackPantsImg,
      name: "Black Pants",
      price: 25,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat tempus laoreet. Suspendisse dignissim odio ac nisi consequat lacinia. Fusce posuere a augue sed venenatis.",
    },
    {
      id: uniqueId("3"),
      img: nikePantsImg,
      name: "Nike Pants",
      price: 30,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat tempus laoreet. Suspendisse dignissim odio ac nisi consequat lacinia. Fusce posuere a augue sed venenatis.",
    },
    {
      id: uniqueId("3"),
      img: adidasPantsImg,
      name: "Adidas Pants",
      price: 35,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat tempus laoreet. Suspendisse dignissim odio ac nisi consequat lacinia. Fusce posuere a augue sed venenatis.",
    },
    {
      id: uniqueId("3"),
      img: greenPantsImg,
      name: "Green Pants",
      price: 15,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat tempus laoreet. Suspendisse dignissim odio ac nisi consequat lacinia. Fusce posuere a augue sed venenatis.",
    },
    {
      id: uniqueId("3"),
      img: underArmourPantsImg,
      name: "Under Armour Pants",
      price: 20,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat tempus laoreet. Suspendisse dignissim odio ac nisi consequat lacinia. Fusce posuere a augue sed venenatis.",
    },
  ],
  "jackets&coats": [
    {
      id: uniqueId("4"),
      img: leatherJacketImg,
      name: "Leather Jacket",
      price: 20,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat tempus laoreet. Suspendisse dignissim odio ac nisi consequat lacinia. Fusce posuere a augue sed venenatis.",
    },
    {
      id: uniqueId("4"),
      img: greenJacketImg,
      name: "Green Jacket",
      price: 25,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat tempus laoreet. Suspendisse dignissim odio ac nisi consequat lacinia. Fusce posuere a augue sed venenatis.",
    },
    {
      id: uniqueId("4"),
      img: lightGreenJacketImg,
      name: "Light Green Jacket",
      price: 30,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat tempus laoreet. Suspendisse dignissim odio ac nisi consequat lacinia. Fusce posuere a augue sed venenatis.",
    },
    {
      id: uniqueId("4"),
      img: grayJacketImg,
      name: "Gray Jacket",
      price: 35,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat tempus laoreet. Suspendisse dignissim odio ac nisi consequat lacinia. Fusce posuere a augue sed venenatis.",
    },
    {
      id: uniqueId("4"),
      img: redJacketImg,
      name: "Red Jacket",
      price: 15,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat tempus laoreet. Suspendisse dignissim odio ac nisi consequat lacinia. Fusce posuere a augue sed venenatis.",
    },
    {
      id: uniqueId("4"),
      img: blueJacketImg,
      name: "Blue Jacket",
      price: 20,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat tempus laoreet. Suspendisse dignissim odio ac nisi consequat lacinia. Fusce posuere a augue sed venenatis.",
    },
  ],
};

export default productData;
