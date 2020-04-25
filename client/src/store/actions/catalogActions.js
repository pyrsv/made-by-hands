import axios from 'axios'
import { GET_CATEGORIES } from '../types/catalogTypes';

const getCategories = categories => ({
  type: GET_CATEGORIES,
  payload: categories,
});

export const getCategoriesAction = () => dispatch => {
  axios.get('/catalog').then(response => {
    dispatch(getCategories(response.data))
  })
};