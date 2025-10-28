import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function cx(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function buildCollectionUrl(
  collectionHandle: string,
  categoryHandle: string,
  subcategoryHandle: string,
) {
  if (subcategoryHandle === "all") {
    return `/collections/${collectionHandle}/${categoryHandle}`;
  }
  return `/collections/${collectionHandle}/${categoryHandle}?type=${subcategoryHandle}`;
}
