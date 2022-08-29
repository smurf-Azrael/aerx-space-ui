export type Profile = {
    token_id: string,
    owner_id: string,
    metadata: {
        title: string,
        media?: string,
        description: string,
        copies?: number,
        issued_at?: string,
        expires_at?: string,
        starts_at?: string,
        updated_at?: string,
        extra?: string,
        reference?: string,
        reference_hash?: string
    },
    approved_account_ids: string[]
}