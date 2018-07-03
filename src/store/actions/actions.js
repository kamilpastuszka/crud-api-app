import * as actionTypes from './actionTypes';
import axios from 'axios';
import thunk from 'redux-thunk';


export const fetchCakesSuccess = (cakes) => {
    return {
        type: actionTypes.FETCH_CAKES_SUCCESS,
        cakes
    }
}

export const fetchCakesFailure = () => {
    return {
        type: actionTypes.FETCH_CAKES_FAILURE
    }
}



export const fetchCakes = () => {
    return dispatch => {
        axios.get('http://ec2-34-243-153-154.eu-west-1.compute.amazonawss.com:5000/api/cakes')
            .then( (response) => {
                console.log(response.data);
                dispatch(fetchCakesSuccess(response.data))
            })
            .catch( (error) => {
                dispatch(fetchCakesFailure(error))
            })
    }
}