import { atom, selector } from 'recoil';
import { productsList } from './products';

export const CART_ITEM = 'CART_ITEM';

export interface CartInfo {
  readonly id: number;
  readonly count: number;
}

export interface CartItems {
  readonly id: string;
  readonly title: string;
  readonly price: number;
  readonly count: number;
  readonly image: string;
}

export interface CartState {
  readonly items?: Record<string | number, CartInfo>;
}

export const cartState = atom<CartState>({
  key: 'cart',
  default: {},
  effects: [
    ({ setSelf, onSet }) => {
      localStorage.getItem(CART_ITEM) && setSelf(JSON.parse(localStorage.getItem(CART_ITEM) as string));
      onSet((value) => localStorage.setItem(CART_ITEM, JSON.stringify(value)));
    },
  ],
});

export const cartCount = selector<number>({
  key: 'cartCount',
  get: ({ get }) => {
    const cartItems = get(cartState);
    return Object.keys(cartItems).reduce((acc: number, index: string) => {
      return acc + cartItems[index].count || 0;
    }, 0);
  },
});

export const cartTotal = selector<number>({
  key: 'cartTotal',
  get: ({ get }) => {
    const products = get(productsList);
    const cartItems = get(cartState);
    return (
      Object.keys(cartItems).reduce((acc: number, id: string) => {
        return acc + cartItems[id].count * products[parseInt(id) - 1].price || 0;
      }, 0) || 0
    );
  },
});

export const cartList = selector<CartItems[]>({
  key: 'cartList',
  get: ({ get }) => {
    const products = get(productsList);
    const cartItems = get(cartState);
    return Object.keys(cartItems).map((id) => {
      const items = cartItems[id];
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

export const addToCart = (cart: CartState, id: string) => {
  if (!cartState[id]) {
    cartState[id] = {
      id,
      count: 1,
    };
    return {
      ...cart,
      [id]: {
        id,
        count: 1,
      },
    };
  }
  cartState[id].count++;
  return { ...cart, [id]: { id: id, count: cartState[id].count } };
};

export const removeFromCart = (cart: CartState, id: string) => {
  const tempCart = { ...cart };
  if (tempCart[id].count === 1) {
    delete tempCart[id];
    return tempCart;
  } else {
    return { ...tempCart, [id]: { id: id, count: cart[id].count - 1 } };
  }
};
