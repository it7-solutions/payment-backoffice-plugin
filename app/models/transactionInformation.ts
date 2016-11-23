export interface TransactionInformation {
    success?: {
        amount?: string;
        bank?: string;
        cc_status?: string;
        cc_transaction_id?: string;
        date?: string;
        payment_type?: string;
    },
    error?: {
        code?: string;
        message?: string;
        detail?: string;
    }
}
