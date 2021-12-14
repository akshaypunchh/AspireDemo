import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {updateDebitCardLimitLocal} from '../../redux/debit-card/action';
import {SPEND_LIMIT_AMOUNT} from '../../constants/spend-limit';
import imgMeter from '../../assets/spend_limit/img_meter.png';
import Button from '../../UI/Button';
import HeadingBar from '../../UI/Heading';
import {Colors} from '../../utils/Colors';
import useSelect from '../selector';
import {TextHeading, BoxSymbol, TextCurrency} from '../style';
import * as S from './style';

const SpendLimit = () => {
  const {translations} = useSelect();
  const navigation = useNavigation();
  const [amount, setAmount] = useState(null);
  const dispatch = useDispatch();

  // saving to redux
  const onSavePress = () => {
    dispatch(updateDebitCardLimitLocal(amount));
    navigation.goBack();
  };

  return (
    <S.HeadContainer>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
      <S.Container>
        <HeadingBar back backPress={() => navigation.goBack()} />
        <TextHeading>{translations.spendingLimit}</TextHeading>
      </S.Container>
      <S.EmptyBox>
        <S.RowBox>
          <S.MeterImage source={imgMeter} />
          <S.Heading>{translations.setAWeeklyDebitCard}</S.Heading>
        </S.RowBox>
        {/* TextInput container */}
        <S.RowBox mt={13}>
          <BoxSymbol>
            <TextCurrency>{translations.currency}</TextCurrency>
          </BoxSymbol>
          <S.EditText
            keyboardType="decimal-pad"
            returnKeyType="done"
            type="number"
            maxLength={10}
            value={amount}
            placeholder={translations.enterAmount}
            onChangeText={text => setAmount(text)}
          />
        </S.RowBox>
        <S.Divider />
        <S.SubHeading>{translations.hereWeeklMeansTheLast}</S.SubHeading>
        {/* limit 3 buttons*/}
        <S.RowWrapper>
          {SPEND_LIMIT_AMOUNT.map(items => (
            <S.PriceBack onPress={() => setAmount(items.value)}>
              <S.PriceText>{items.label}</S.PriceText>
            </S.PriceBack>
          ))}
        </S.RowWrapper>
        <S.BtnWrapper>
          <Button
            heading={translations.save}
            disable={!amount}
            onPress={onSavePress}
          />
        </S.BtnWrapper>
      </S.EmptyBox>
    </S.HeadContainer>
  );
};

export default SpendLimit;
