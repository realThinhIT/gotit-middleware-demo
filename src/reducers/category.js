import { CategoryActions } from '../actions/category';

const initialState = {
  isLoading: true,
  error: null,
  ids: [],
  byId: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CategoryActions.GET_ALL_CATEGORIES:
      return {
        ...state,
        isLoading: true,
        error: null
      };

    case CategoryActions.GET_ALL_CATEGORIES_SUCCESS:
      const ids = [];
      const byId = {};

      action.payload.forEach(category => {
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

    case CategoryActions.GET_ALL_CATEGORIES_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    case CategoryActions.GET_CATEGORY:
      return {
        ...state,
        isLoading: true,
        error: null
      };
  
    case CategoryActions.GET_CATEGORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        ids: [
          ...state.ids,
          action.payload.id
        ],
        byId: {
          ...state.byId,
          [action.payload.id]: action.payload
        }
      };

    case CategoryActions.GET_CATEGORY_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default: 
      return state;
  }
}

export const getCategories = state => state.ids.map(id => state.byId[id]);
export const getCategoryById = (state, id) => state.byId[id];