export type ItemFormInputType = {
  name: string;
  part: Parts;
  unit: Unit; // 型してい指定
  type: ItemType; // 型してい指定
  memo: string;
};

export const parts = {
  1: '胸',
  2: '背中',
  3: '脚',
  4: '肩',
  5: '二頭',
  6: '三頭',
  99: 'その他',
} as const;

export const unit = {
  1: 'kg',
  2: 'lbs',
  3: 'min',
  99: 'その他',
} as const;

export const itemType = {
  1: '無酸素運動',
  2: '有酸素運動',
};

type Parts = keyof typeof parts;
type Unit = keyof typeof unit;
type ItemType = keyof typeof itemType;
