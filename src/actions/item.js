import { request } from "../utils/request";

export const ItemActions = { 
  GET_ITEMS: 'GET_ITEMS',
  GET_ITEMS_SUCCESS: 'GET_ITEMS_SUCCESS',
  GET_ITEMS_FAILED: 'GET_ITEMS_FAILED',
};

export const getItems = (categoryId = 0) => ({
  type: ItemActions.GET_ITEMS,
  promise: () => request(`/categories/${categoryId}/items`)
});