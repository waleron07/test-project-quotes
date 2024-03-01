interface ItemQuotesType {
  sequence: number;
  symbol: string;
  side: string;
  size: number;
  tradeId: string;
  price: string;
}

interface ItemQuotesRequestType extends ItemQuotesType {
  bestAskPrice: string;
  bestAskSize: number;
  bestBidPrice: string;
  bestBidSize: number;
  ts: number;
}

type InitTableDataType = {
  error: string | null;
  data: {
    quotesA: ItemQuotesType[];
    quotesB: ItemQuotesType[];
  };
};

export { ItemQuotesType, InitTableDataType, ItemQuotesRequestType };
