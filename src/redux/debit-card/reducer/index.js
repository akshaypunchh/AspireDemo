import * as types from '../action/types';

export const initialState = {
  isLoading: false,
  cardLimit: null,
  cardDetails: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CARD_DETAILS_SUCCESS:
      return {
        ...state,
        cardDetails: action.payload.cardDetails,
        isLoading: false,
      };

    case types.GET_CARD_DETAILS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case types.GET_CARD_DETAILS_FAILURE:
      return {
        ...state,
        isLoading: false,
        cardDetails: null,
        error: action.payload,
      };

    case types.UPDATE_DEBIT_CARD_LIMIT:
      return {
        ...state,
        isLoading: false,
        cardLimit: action.payload,
      };

    default: {
      return state;
    }
  }
};
