import { SelectObject } from '../../auth/types';

export type ItemFormInputType = {
  name: string;
  part: number;
  unit: number;
};

export const targetParts: SelectObject[] = [
  { value: 1, label: '胸' },
  { value: 2, label: '背中' },
  { value: 3, label: '脚' },
  { value: 4, label: '肩' },
  { value: 5, label: '二頭' },
  { value: 6, label: '三頭' },
  { value: 7, label: '腹筋' },
  { value: 99, label: 'その他' },
];

export const units: SelectObject[] = [
  { value: 1, label: 'kg' },
  { value: 2, label: 'lbs' },
  { value: 3, label: 'min' },
  { value: 99, label: 'その他' },
];
