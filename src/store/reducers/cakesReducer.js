import * as actionTypes from "../actions/actionTypes";

const initialState = {
    cakes: [],
    error: ""
}

export const cakesReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_CAKES_SUCCESS:
            return {
                ...state,
                cakes: action.cakes
            }
        
            case actionTypes.FETCH_CAKES_FAILURE:
            const errorMessage = "Error: fetching API data was not successful";
        return {
            ...state,
            error: errorMessage
        }

        default: {
            return state;
        }
     }
 }
