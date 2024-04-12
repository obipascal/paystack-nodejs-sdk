import { Currencies } from "./const";
export type ProductBody = {
    /** Name of product */
    name: string;
    /** A description for this product */
    description: string;
    /** Price should be in the subunit of the supported currency */
    price: number;
    /** Currency in which price is set */
    currency: Currencies;
    /** Set to true if the product has unlimited stock. Leave as false if the product has limited stock */
    unlimited?: boolean;
    /** Number of products in stock. Use if unlimited is false */
    quantity?: number;
};
