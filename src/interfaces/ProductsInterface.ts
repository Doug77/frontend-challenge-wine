import {IProduct} from './ProductInterface'

export interface IProducts {
  items: IProduct[];
  itemsPerPage: number;
  page: number;
  totalItems: number;
  totalPages: number;
}
