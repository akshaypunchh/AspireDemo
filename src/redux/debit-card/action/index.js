import {getCardDetails} from '../../../http/debit-card';
import {errorHandler} from '../../helpers';
import * as types from './types';

const getDebitCardDataRequest = () => ({
  type: types.GET_CARD_DETAILS_REQUEST,
});

const getDebitCardDataSuccess = payload => ({
  type: types.GET_CARD_DETAILS_SUCCESS,
  payload,
});

const getDebitCardDataFailure = payload => ({
  type: types.GET_CARD_DETAILS_FAILURE,
  payload,
});

export const getCardDetailsApi = () => async (dispatch, getState) => {
  const {errors} = getState().locale.translations.data;
  dispatch(getDebitCardDataRequest());
  try {
    const cardData = await getCardDetails();
    dispatch(getDebitCardDataSuccess(cardData));
  } catch (error) {
    errorHandler({onFailure: getDebitCardDataFailure, error, errors, dispatch});
  }
};

const updateDebitCardLimit = payload => ({
  type: types.UPDATE_DEBIT_CARD_LIMIT,
  payload,
});

export const updateDebitCardLimitLocal = amount => async dispatch => {
  dispatch(updateDebitCardLimit(amount));
};
