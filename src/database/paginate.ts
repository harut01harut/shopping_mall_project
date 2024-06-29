import { SORT_ORDER } from "@common/enums/sort-order.enum";

export interface I_PaginateOptions {
  page: number;
  perPage: number;
  sortField: string;
  sortOrder: SORT_ORDER;
  filter?: {
    [key: string]: any;
  };
}
