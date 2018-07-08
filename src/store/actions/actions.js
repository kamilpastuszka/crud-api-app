import * as actionTypes from './actionTypes';
import axios from 'axios';
import uuid from  'uuid';


const cakesUrl = 'http://ec2-34-243-153-154.eu-west-1.compute.amazonaws.com:5000/api/cakes'

// FETCHING CAKES
export const fetchCakesSuccess = (cakes) => {
    return {
        type: actionTypes.FETCH_CAKES_SUCCESS,
        cakes
    };
};

export const fetchCakesFailure = (error) => {
    return {
        type: actionTypes.FETCH_CAKES_FAILURE,
        error
    };
};

export const fetchCakes = () => {
    return dispatch => {
        axios.get(cakesUrl)
            .then( (response) => dispatch(fetchCakesSuccess(response.data)))
            .catch( (error) => dispatch(fetchCakesFailure(error)));
    };
};

// ADDDING CAKE
export const addCakeSucess = (newCake) => {
    return {
        type: actionTypes.ADD_CAKE_SUCCESS,
        newCake
    };
};

export const addCakeFailure = (error) => {
    return {
        type: actionTypes.ADD_CAKE_FAILURE,
        error
    };
};

export const addCake = (cake) => {
    return dispatch => {
        const newCake = {
            ...cake,
            id: uuid()
        };

    axios.post(cakesUrl, {
        id: newCake.id,
        name: newCake.name,
        comment: newCake.comment,
        imageUrl: newCake.imageUrl,
        yumFactor: newCake.yumFactor
    })
      .then((newCake) => dispatch(addCakeSucess(newCake)))
      .catch((error) => dispatch(addCakeFailure(error)));
     console.log('inside dispatched action:', newCake); 
    };
};


// DELETING CAKE
export const deleteCakeSuccess = ({id}) => {
    return {
        type: actionTypes.DELETE_CAKE_SUCCESS,
        id
    };
};

export const deleteCakeFailure = () => {
    return {
        type: actionTypes.DELETE_CAKE_FAILURE,
    }
}

export const deleteCake = (id) => {
    return dispatch => {
       axios.delete(`${cakesUrl}/${id}`)
    .then((id) => dispatch(deleteCakeSuccess(id)))
    .catch((error) => dispatch(deleteCakeFailure(error)))
    };
};

//UPDATING CAKE
export const updateCakeSuccess = ({id, updatedCake}) => {
    return {
        type: actionTypes.UPDATE_CAKE_SUCCESS,
        id,
        updatedCake
    };
};

export const updateCakeFailure = (error) => {
    return {
        type: actionTypes.UPDATE_CAKE_FAILURE,
        error
    };
};

export const updateCake = (id, updatedCake ) => {
    return dispatch => {
       axios.put(`${cakesUrl}/${id}`, {
           id,
           name: updatedCake.name,
           comment: updatedCake.comment,
           yumFactor: updatedCake.yumFactor,
           imageUrl: updatedCake.imageUrl
       })
    .then((id, updatedCake ) => dispatch(updateCakeSuccess(id, updatedCake)))
    .catch((error) => dispatch(updateCakeFailure(error)))
    };
};