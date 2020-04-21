export const GET_INFO_ITEMS = 'GET_INFO_ITEMS';

const initialItems = {items:[]}

export const infoCarouselReducer = (state = initialItems, action) => {
    switch (action.type) {
    case GET_INFO_ITEMS:
        return {
            ...state,
            items: action.payload,
        };
    default: {
        return {
            ...state,
            };
        }
    }
};