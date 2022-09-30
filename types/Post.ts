import { Profile } from "./Profile";

export type Post = {
    id: number;
    postOwner: {
        name: string,
        avatar: string,
        bio?: string
    }
    title: string;
    description: string,
    type: 'text' | 'image' | 'video' | 'audio' | 'file' | 'tempo',
    postType: 'post' | 'tempo',
    coverImage: string,
    attachment: string,
    nftId: string,
}

export type Feed = {
    post_id: string,
    owner_id: string,
    owner_profile?: Profile,
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
    total_charges?: number,
    original_post_id?: string,
    co_earners?: any[],
    type?: 'text' | 'image' | 'video' | 'audio' | 'file' | 'tempo',
    profile?: Profile,
}

export type Tempo = {
    ownerId: string,
    title: string,
    content: string,
    time: string

}