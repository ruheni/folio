import { atom } from "jotai";
import prisma from "../lib/prisma";

export const currentFeedAtom = atom("");

export const isClaimedAtom = atom(true);

export const pagesAtom = atom(["posts", "contact"]);

export const adminPostHoveredAtom = atom(0);

// const readWriteAtom = atom(
//   (get) => get(priceAtom) * 2,
//   (get, set, newPrice) => {
//     set(priceAtom, newPrice / 2);
//     // you can set as many atoms as you want at the same time
//   }
// );
