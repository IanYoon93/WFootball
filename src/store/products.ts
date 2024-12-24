import { selector } from 'recoil';

const productsURL = '/data/data.json';
// export const productsURL = import.meta.env.VITE_W_FOOTBALL_API;
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

export const filterProductsByCategory = (products: Product[], category: string): Product[] => {
  switch (category) {
    case '축구화/풋살화':
      return products.filter((item) => item.category === '축구화' || item.category === '풋살화');
    case '런닝화/트레이닝화':
      return products.filter((item) => item.category === '런닝화' || item.category === '트레이닝화');
    case '의류':
      return products.filter((item) => item.category === '상의' || item.category === '하의');
    case '기타용품':
      return products.filter((item) => item.category === '기타용품');
    default:
      console.log(category);
      return [];
  }
};
