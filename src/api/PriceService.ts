import { ApiService } from "./ApiService";

type PriceType = {
  LiqPrice: number | string
}

export class PriceService{

  api: ApiService<PriceType>;

  constructor() {
    this.api = new ApiService<PriceType>();
  }

  public getLiqPrice(url: string) {
    return this.api.get(url);
  }
}