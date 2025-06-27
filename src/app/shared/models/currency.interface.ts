export interface Currency {
  symbol: string;
  code: string;
}

export interface ExchangeRate {
  currency: string;
  date: string;
  purchasePrice: number;
  salesPrice: number;
}
