import { nearStore } from "../store/near";

// re-wrote this to return a single callable function instead
// todo - modify this to append to feed state instead
// todo - to be called as the user scrolls down in the content page : opt

export type postDetailsType = {
    title: string,
    body: string,
    media: string,
    mediaType: string,
    mediaHash: any,
};

export async function fetchpostsData(state: any) {
    if (state.pnftContract) {
        const isUserRegistered = await state.pnftContract?.has_registered({
            user_id: state.accountId,
        });
        if (isUserRegistered) {
            const responseFeeddata = await state.pnftContract?.get_all_posts({
                user_id: state.accountId,
            });
            if (responseFeeddata) {
                state.setFeed(responseFeeddata.reverse());
            }
        }
    }
}
