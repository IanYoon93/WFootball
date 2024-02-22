import { selector } from 'recoil';
import axios from 'axios';
// import dummy from '../data/data.json';

// type DummyType = Product[];

const productsURL = 'src/data/data.json';
// const productsURL = dummy;
console.log(productsURL);

export interface Product {
  readonly id: number;
  readonly title: string;
  readonly price: number;
  readonly img: string;
  readonly category: string;
  readonly brand: string;
}

export const productsList = selector<Product[]>({
  key: 'productsList',
  get: async () => {
    try {
      const response = await axios.get(`${productsURL}`);
      return response.data;

      // const response = await fetch(productsURL as unknown as string);
      // return (await response.json()) || [];
    } catch (error) {
      console.log(`Error: \n${error}`);
      return [];
    }
  },
});
