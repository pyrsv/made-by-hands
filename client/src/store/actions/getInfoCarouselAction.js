import {GET_INFO_ITEMS} from '../reducers/infoCarouselReducer'

export const getInfoCarouselAction = () => dispatch => {
        fetch("../infoItems.json")
        .then(res => {
        return res.json()})
        .then(data => {
            dispatch({
            type: GET_INFO_ITEMS,
            payload: [...data.infoItems],
            });
        });
};
