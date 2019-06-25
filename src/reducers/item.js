import { ItemActions } from '../actions/item';

const initialState = {
  isLoading: true,
  error: null,
  ids: [],
  byId: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ItemActions.GET_ITEMS:
      return {
        ...state,
        isLoading: true,
        ids: [],
        byId: {},
        error: null
      };

    case ItemActions.GET_ITEMS_SUCCESS:
      const ids = [];
      const byId = {};

      action.payload.items.forEach(category => {
        ids.push(category.id);
        byId[category.id] = category;
      });
      
      return {
        ...state,
        isLoading: false,
        error: null,
        ids,
        byId
      };

    case ItemActions.GET_ITEMS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default: 
      return state;
  }
}

export const getAvailableItems = state => state.ids.map(id => state.byId[id]);