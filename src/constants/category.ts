export const Category: { [key: string]: string } = {
  축구화: '축구화',
  풋살화: '풋살화',
  런닝화: '런닝화',
  트레이닝화: '트레이닝화',
  상의: '상의',
  하의: '하의',
  기타용품: '기타용품',
} as const;

// type categoryType = (typeof Category)[keyof typeof Category];
