import { atom } from "recoil";

export const products = atom({
  key: "products",
  default: [],
});

export const filterProductsValue = atom({
  key: "filterProductsValue",
  default: "",
});
