import { selector } from 'recoil';

// const productsURL = 'src/data/data.json';
const productsURL = import.meta.env.VITE_W_FOOTBALL_API;
console.log(productsURL);

export interface Product {
  readonly id: number;
  readonly title: string;
  readonly price: number;
  readonly img: string;
  readonly category: string;
  readonly brand: string;
}

const saveData = (data: Product[]) => {
  localStorage.setItem('productsData', JSON.stringify(data));
};

const getData = () => {
  const data = localStorage.getItem('productsData');
  return data ? JSON.parse(data) : [];
};

export const productsList = selector({
  key: 'productList',
  get: async () => {
    try {
      const storeData = getData();

      if (storeData.length > 0) {
        return storeData;
      }

      const response = await fetch(productsURL);
      const data = await response.json();

      saveData(data);

      return data || [];
    } catch (error) {
      console.log(`Error: \n${error}`);
      return [];
    }
  },
});
