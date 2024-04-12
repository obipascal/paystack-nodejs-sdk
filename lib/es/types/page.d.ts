export type PageBody = {
    /** Name of page */
    name: string;
    /** A description for this page */
    description?: string;
    /** Amount should be in the subunit of the supported currency */
    amount?: number;
    /** The split code of the transaction split. e.g. SPL_98WF13Eb3w */
    split_code?: string;
    /** URL slug you would like to be associated with this page. Page will be accessible at https://paystack.com/pay/[slug] */
    slug?: string;
    /** Extra data to configure the payment page including subaccount, logo image, transaction charge */
    metadata?: Record<string, any>;
    /** If you would like Paystack to redirect someplace upon successful payment, specify the URL here. */
    redirect_url?: string;
    /** If you would like to accept custom fields, specify them here. */
    custom_fields?: Array<Record<string, any>>;
};
export type UpdatePageBody = {
    /** Name of page */
    name: string;
    /** A description for this page */
    description: string;
    /** Default amount you want to accept using this page. If none is set, customer is free to provide any amount of their choice. The latter scenario is useful for accepting donations */
    amount?: number;
    /** Set to false to deactivate page url */
    active?: boolean;
};
export type AddProductBody = {
    product: Array<string>;
};
