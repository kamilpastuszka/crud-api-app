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
            };
        
        case actionTypes.FETCH_CAKES_FAILURE:
            const errorMessage = "Error: fetching API data was not successful";
            return {
                ...state,
                error: errorMessage
            };

        case actionTypes.ADD_CAKE_SUCCESS:
            return {
                ...state,
                cakes: [...state.cakes.concat(action.newCake)]
            };

        case actionTypes.ADD_CAKE_FAILURE:
        return {
            ...state,
            error: action.error
        };

        case actionTypes.DELETE_CAKE_SUCCESS: 
            return {
                ...state,
                cakes: [...state.cakes.filter(({id}) => id !== action.id )]
            };

        case actionTypes.DELETE_CAKE_FAILURE:
            return {
                ...state,
                error: action.error
            };
        
        case actionTypes.UPDATE_CAKE_SUCCESS:
        return state.map((cake) => {
            if(cake.id === action.id) {
                return {
                    ...cake,
                    ...action.updatedCake
                };
            } else return cake;
        });

        case actionTypes.UPDATE_CAKE_FAILURE:
        return {
            ...state,
            error: action.error
        };

        default: return state;
    
     }
 }
