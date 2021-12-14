import React, {useState} from 'react';
import {shape, string} from 'prop-types';

import imgLogo from '../../../assets/debit_card/img_aspire_logo.png';
import imgVisa from '../../../assets/debit_card/img_visa.png';
import imgHide from '../../../assets/debit_card/img_hide.png';
import imgShow from '../../../assets/debit_card/img_show.png';
import {CARD_NUMBER_SET} from '../../../constants/spend-limit';
import useSelect from '../../selector';
import * as S from './style';

const Card = ({data}) => {
  const {translations} = useSelect();
  const [showData, setShowData] = useState(true);

  //function to hide and show card details
  const getCardNumber = (number, view, show) => {
    if (!show) {
      return translations.numberHide;
    }
    if (!number) {
      return translations.numberHide;
    }
    if (view === CARD_NUMBER_SET.TOP_1) {
      return number.substring(0, 4);
    }
    if (view === CARD_NUMBER_SET.TOP_2) {
      return number.substring(4, 8);
    }
    if (view === CARD_NUMBER_SET.TOP_3) {
      return number.substring(8, 12);
    }
    if (view === CARD_NUMBER_SET.TOP_4) {
      return number.substring(12, 16);
    }
    return '';
  };

  return (
    <S.TopContainer>
      <S.HideBox onPress={() => setShowData(!showData)}>
        <S.HideImg source={showData ? imgHide : imgShow} />
        <S.TextHide>
          {showData ? translations.hideCardNumber : translations.showCardNumber}
        </S.TextHide>
      </S.HideBox>
      <S.Container>
        <S.LogoImg source={imgLogo} />
        <S.VisaImg source={imgVisa} />
        <S.TextName>{data?.name}</S.TextName>
        <S.RowBox>
          <S.TextCardNum>
            {getCardNumber(data?.cardNumber, CARD_NUMBER_SET.TOP_1, showData)}
          </S.TextCardNum>
          <S.TextCardNum ml={24}>
            {getCardNumber(data?.cardNumber, CARD_NUMBER_SET.TOP_2, showData)}
          </S.TextCardNum>
          <S.TextCardNum ml={24}>
            {getCardNumber(data?.cardNumber, CARD_NUMBER_SET.TOP_3, showData)}
          </S.TextCardNum>
          <S.TextCardNum ml={24}>
            {getCardNumber(data?.cardNumber, CARD_NUMBER_SET.TOP_4, true)}
          </S.TextCardNum>
        </S.RowBox>
        <S.RowBox mb={48}>
          <S.TextNum>{`${translations.thru} ${data?.date}`}</S.TextNum>
          <S.TextNum ml={32}>{`${translations.cvv} ${
            showData ? data?.cvv : translations.cvvHide
          }`}</S.TextNum>
        </S.RowBox>
      </S.Container>
    </S.TopContainer>
  );
};

Card.propTypes = {
  data: shape({
    name: string.isRequired,
    cardNumber: string.isRequired,
    date: string.isRequired,
    cvv: string.isRequired,
  }),
};

export default Card;
