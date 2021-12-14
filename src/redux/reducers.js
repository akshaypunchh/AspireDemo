import {combineReducers} from 'redux';

import debitCard from './debit-card/reducer';

// Legacy
import locale from './locale';

export default () =>
  combineReducers({
    debitCard,

    // Legacy
    locale,
  });
