export enum Currencies {
  NGN = "NGN",
  USD = "USD",
  GHS = "GHS",
  ZAR = "ZAR",
  KES = "KES",
}

export type PaginationParams = {
  /** Specify how many records you want to retrieve per page. If not specify we use a default value of 50. */
  perPage: number
  /** Specify exactly what transfer you want to page. If not specify we use a default value of 1. */
  page: number
  // ------ [Optional] ------
  /** A timestamp from which to start listing batches e.g. 2016-09-24T00:00:05.000Z, 2016-09-21 */
  from?: string
  /** A timestamp at which to stop listing batches e.g. 2016-09-24T00:00:05.000Z, 2016-09-21 */
  to?: string
  /** Either one of these values: pending, success or failed */
  status?: "pending" | "success" | "failed" | "reversed"
  /** Transaction Id */
  transaction?: string
}

export interface PagerParams {
  /** Specify how many records you want to retrieve per page. If not specify we use a default value of 50. */
  perPage: number
  /** Specify exactly what transfer you want to page. If not specify we use a default value of 1. */
  page: number
  // ------ [Optional] ------
  /** A timestamp from which to start listing batches e.g. 2016-09-24T00:00:05.000Z, 2016-09-21 */
  from?: string
  /** A timestamp at which to stop listing batches e.g. 2016-09-24T00:00:05.000Z, 2016-09-21 */
  to?: string
}
