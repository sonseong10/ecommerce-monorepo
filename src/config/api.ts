export const API_BASE = '/api'

export const ROW_SIZE: Array<{ value: number; label: string }> = [
  {
    value: 10,
    label: '10개씩 보기',
  },
  {
    value: 30,
    label: '30개씩 보기',
  },
  {
    value: 50,
    label: '50개씩 보기',
  },
  {
    value: 100,
    label: '100개씩 보기',
  },
]

export const SEARCH_FILTER_SET: { KO: Array<number>; EN: number } = {
  KO: [
    12593, // ㄱ
    12596, // ㄴ
    12599, // ㄷ
    12601, // ㄹ
    12609, // ㅁ
    12610, // ㅂ
    12613, // ㅅ
    12615, // ㅇ
    12616, // ㅈ
    12618, // ㅊ
    12619, // ㅋ
    12620, // ㅌ
    12621, // ㅍ
    12622, // ㅎ
  ],
  EN: 65,
}

// popup
export const POPUP_SIZE: { [key: string]: { x: number; y: number } } = {
  X520_Y275: {
    x: 520,
    y: 275,
  },
  X1120_Y800: {
    x: 1120,
    y: 800,
  },
}

export const STORAGE_PERIOD: { [key: string]: number } = {
  TODAY: 1,
  WEEK: 7,
}

export const SORT_OPTIONS: { [key: string]: { type: string; value: string } } = {
  LASTEST: {
    type: 'createdAt,desc',
    value: '최신순',
  },
  SALE: {
    type: 'saleCount,desc',
    value: '판매순',
  },
  POPULAR: {
    type: 'reviewCount,desc',
    value: '인기순',
  },
  HIGH_PRICE: {
    type: 'sellingPrice,desc',
    value: '가격높은순',
  },
  LOW_PRICE: {
    type: 'sellingPrice,asc',
    value: '가격낮은순',
  },
  REVIEW: {
    type: 'reviewCount,desc',
    value: '리뷰순',
  },
}
