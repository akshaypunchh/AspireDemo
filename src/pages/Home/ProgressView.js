import React from 'react';
import {number} from 'prop-types';

import {formatPayment} from '../../utils/formatter/currencyConvert';
import ProgressBar from '../../components/ProgressBar';
import useSelect from '../selector';
import * as S from './style';

const ProgressView = ({spend, total}) => {
  const {translations} = useSelect();

  // calculate percent on progress bar
  const percent = () => {
    if (spend === 0 || total === 0) {
      return 0.01;
    } else {
      return spend / total;
    }
  };

  return (
    <S.ProgressBox>
      <S.ProgressTop>
        <S.ProgressHeading>{translations.debitCardSpending}</S.ProgressHeading>
        <S.ProgressLeft>
          <S.ProgressSpend>{formatPayment(spend)}</S.ProgressSpend>
          <S.ProgressDivide />
          <S.ProgressTotal>{formatPayment(total)}</S.ProgressTotal>
        </S.ProgressLeft>
      </S.ProgressTop>
      <ProgressBar fillBar={percent()} />
    </S.ProgressBox>
  );
};

ProgressView.propTypes = {
  spend: number,
  total: number,
};

ProgressView.propTypes = {
  spend: 0,
  total: 0,
};

export default ProgressView;
