import { atom, selector } from 'recoil';
import { productsList } from './products';

export const WISHLIST_ITEM = 'WISHLIST_ITEM ';

export interface WishlistInfo {
  readonly id: number;
  readonly count: number;
}

export interface WishlistItems {
  readonly id: string;
  readonly title: string;
  readonly price: number;
  readonly count: number;
  readonly image: string;
}

export interface WishlistState {
  readonly items?: Record<string | number, WishlistInfo>;
}

export const wishlistState = atom<WishlistState>({
  key: 'wishlist',
  default: {},
  effects: [
    ({ setSelf, onSet }) => {
      localStorage.getItem(WISHLIST_ITEM) && setSelf(JSON.parse(localStorage.getItem(WISHLIST_ITEM) as string));
      onSet((value) => localStorage.setItem(WISHLIST_ITEM, JSON.stringify(value)));
    },
  ],
});

export const wishlistCount = selector<number>({
  key: 'wishlistCount',
  get: ({ get }) => {
    const wishlistItems = get(wishlistState);
    return Object.keys(wishlistItems).reduce((acc: number, index: string) => {
      return acc + wishlistItems[index].count || 0;
    }, 0);
  },
});

export const wishList = selector<WishlistItems[]>({
  key: 'wishList',
  get: ({ get }) => {
    const products = get(productsList);
    const wishlistItems = get(wishlistState);
    return Object.keys(wishlistItems).map((id) => {
      const items = wishlistItems[id];
      return {
        id: items.id,
        image: products[items.id - 1].image,
        title: products[items.id - 1].title,
        count: items.count,
        price: items.count * products[items.id - 1].price,
      };
    });
  },
});

export const addToWishList = (wishlist: WishlistState, id: string) => {
  if (!wishlistState[id]) {
    wishlistState[id] = {
      id,
      count: 1,
    };
    return {
      ...wishlist,
      [id]: {
        id,
        count: 1,
      },
    };
  }
  wishlistState[id].count;
  return { ...wishlist, [id]: { id: id, count: wishlistState[id].count } };
};

export const removeFromWishList = (wishlist: WishlistState, id: string) => {
  const tempWishList = { ...wishlist };
  if (tempWishList[id].count === 1) {
    delete tempWishList[id];
    return tempWishList;
  } else {
    return { ...tempWishList, [id]: { id: id, count: wishlist[id].count - 1 } };
  }
};
