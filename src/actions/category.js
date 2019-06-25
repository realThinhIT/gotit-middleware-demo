import { request } from "../utils/request";

export const CategoryActions = { 
  GET_ALL_CATEGORIES: 'GET_ALL_CATEGORIES',
  GET_ALL_CATEGORIES_SUCCESS: 'GET_ALL_CATEGORIES_SUCCESS',
  GET_ALL_CATEGORIES_FAILED: 'GET_ALL_CATEGORIES_FAILED',

  GET_CATEGORY: 'GET_CATEGORY',
  GET_CATEGORY_SUCCESS: 'GET_CATEGORY_SUCCESS',
  GET_CATEGORY_FAILED: 'GET_CATEGORY_FAILED'
};

export const getAllCategories = () => ({
  type: CategoryActions.GET_ALL_CATEGORIES,
  promise: () => request('/categories')
});

export const getCategory = categoryId => ({
  type: CategoryActions.GET_CATEGORY,
  promise: () => request(`/categories/${categoryId}`)
});