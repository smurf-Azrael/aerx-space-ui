import create from "zustand";
import { NearStoreType } from "../types/stores";

const nearStore = create<NearStoreType>((set) => ({
    connection: null,
    setConnection: (connection: any) => set(() => ({ connection })),
    removeConnection: () => set(() => ({ connection: null })),

    walletConnection: null,
    setWalletConnection: (walletConnection: any) =>
        set((state) => ({ ...state, walletConnection })),
    removeWalletConnection: () =>
        set((state) => ({ ...state, walletConnection: null })),

    accountId: null,
    setAccountId: (accountId: any) => set((state) => ({ ...state, accountId })),
    removeAccountId: () => set((state) => ({ ...state, accountId: null })),

    tokenContract: null,
    setTokenContract: (tokenContract: any) =>
        set((state) => ({ ...state, tokenContract })),
    removeTokenContract: () =>
        set((state) => ({ ...state, tokenContract: null })),

    profileContract: null,
    setProfileWithUserAsSigner: (profileContract: any) =>
        set((state) => ({ ...state, profileContract })),
    removeProfileWithUserAsSigner: () =>
        set((state) => ({ ...state, profileContract: null })),

    DexContract: null,
    setDexContract: (DexContract: any) =>
        set((state) => ({ ...state, DexContract })),
    removeDexContract: () => set((state) => ({ ...state, DexContract: null })),

    pnftContract: null,
    setPNFTContract: (pnftContract: any) =>
        set((state) => ({ ...state, pnftContract })),
    removeNFTContract: () => set((state) => ({ ...state, pnftContract: null })),

    profile: {
        userId: "",
        username: "",
        fullName: "",
        aboutMe: "",
        profileImg: "",

    },
    setProfile: (profile: any) => set((state) => ({ ...state, profile })),
    removeProfile: () => set((state) => ({
        ...state, profile: {
            userId: "",
            username: "",
            fullName: "",
            aboutMe: "",
            profileImg: "",

        }
    })),
    lastRes: null,
    setLastRes: (lastRes: any) => set((state) => ({ ...state, lastRes })),
    removeLastRes: () => set((state) => ({ ...state, lastRes: null })),

    feed: null,
    setFeed: (feed: any) => set((state) => ({ ...state, feed })),
    removeFeed: () => set((state) => ({ ...state, feed: null })),

    aexBalance: 0,
    setAexBalance: (aexBalance: any) => set((state) => ({ ...state, aexBalance })),
    removeAexBalance: () => set((state) => ({ ...state, aexBalance: 0 })),

    nearBalance: 0,
    setNearBalance: (nearBalance: any) => set((state) => ({ ...state, nearBalance })),
    removeNearBalance: () => set((state) => ({ ...state, NearBalance: 0 })),

    nearAccount: null,
    setNearAccount: (nearAccount: any) => set((state) => ({ ...state, nearAccount })),
    removeNearAccount: () => set((state) => ({ ...state, nearAccount: null })),

    pinataState: null,
    setPinataState: (pinataState: any) => set((state) => ({ ...state, pinataState })),
    removePinataState: () => set((state) => ({ ...state, pinataState: null })),

    postDetails: {
        title: "",
        body: "",
        media: "",
        mediaType: "",
        mediaHash: null
    },
    setPostDetails: (postDetails: any) => set((state) => ({ ...state, postDetails })),
    removePostDetails: () => set((state) => ({
        ...state, postDetails: {
            title: "",
            body: "",
            media: "",
            mediaType: "",
            mediaHash: null
        }
    })),

    prevChats: null,
    setPrevChats: (prevChats: any) => set((state) => ({ ...state, prevChats })),
    removePrevChats: () => set((state) => ({ ...state, prevChats: null })),

    is3D: false,
    setIs3D: (is3D: any) => set((state) => ({ ...state, is3D })),
    removeIs3D: () => set((state) => ({ ...state, is3D: false })),

    _3dUrl: null,
    set3DUrl: (_3dUrl: any) => set((state) => ({ ...state, _3dUrl })),
    remove3DUrl: () => set((state) => ({ ...state, _3dUrl: null })),

}));

export { nearStore };