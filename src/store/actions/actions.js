import * as actionTypes from './actionTypes';
import axios from 'axios';
import uuid from  'uuid';

const cakesUrl = 'http://ec2-34-243-153-154.eu-west-1.compute.amazonaws.com:5000/api/cakes'

export const fetchCakesSuccess = (cakes) => {
    return {
        type: actionTypes.FETCH_CAKES_SUCCESS,
        cakes
    };
};

export const fetchCakesFailure = () => {
    return {
        type: actionTypes.FETCH_CAKES_FAILURE
    }
}

export const fetchCakes = () => {
    return dispatch => {
        axios.get(cakesUrl)
            .then( (response) => {
                console.log(response.data);
                dispatch(fetchCakesSuccess(response.data))
            })
            .catch( (error) => {
                dispatch(fetchCakesFailure(error))
            })
    };
};


export const addCakeSucess = (newCake) => {
    return {
        type: actionTypes.ADD_CAKE,
        newCake
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
        immageUrl: newCake.immageUrl,
        yumFactor: newCake.yumFactor
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
     console.log('inside dispatched action:', newCake);
     dispatch(addCakeSucess(newCake))
    };
};

