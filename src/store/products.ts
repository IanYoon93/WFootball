import { selector } from 'recoil';

const productsURL = '/data/data.json?v=1';
// export const productsURL = import.meta.env.VITE_W_FOOTBALL_API;
console.log(productsURL);

export interface Product {
  readonly id: number;
  readonly title: string;
  readonly price: number;
  readonly img: string;
  readonly category: string;
  readonly brand: string;
  readonly size: Array<{ value: string; text: string }>;
}

export const productsList = selector({
  key: 'productList',
  get: async () => {
    try {
      const response = await fetch(productsURL);
      const data = await response.json();

      // 데이터 확인
      console.log('Loaded Products:', data);

      return data || [];
    } catch (error) {
      console.error(`Error loading products: ${error}`);
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
