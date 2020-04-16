const initialItems = {items:[]}

export const itemsReducer = (state = initialItems, action) => {
    switch (action.type) {
    case 'GET_ITEMS':
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
