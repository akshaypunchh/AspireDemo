import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {getCardDetailsApi} from '../../redux/debit-card/action';
import imgCat1 from '../../assets/debit_card/img_cat_1.png';
import imgCat2 from '../../assets/debit_card/img_cat_2.png';
import imgCat3 from '../../assets/debit_card/img_cat_3.png';
import imgCat4 from '../../assets/debit_card/img_cat_4.png';
import imgCat5 from '../../assets/debit_card/img_cat_5.png';
import {NAVIGATION_KEY} from '../../constants/navigation';
import Loader from '../../UI/Loader';
import HeadingBar from '../../UI/Heading';
import {Colors} from '../../utils/Colors';
import Options from './Options';
import Card from './Card';
import ProgressView from './ProgressView';
import useSelect from '../selector';
import {TextHeading} from '../style';
import * as S from './style';

const HomePage = () => {
  const {translations, cardLimit, cardDetails, isLoading} = useSelect();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const goToLimitScreen = () => {
    navigation.navigate(NAVIGATION_KEY.SPEND_LIMIT_SCREEN);
  };

  // fetching data from api
  useEffect(() => {
    dispatch(getCardDetailsApi());
  }, [dispatch]);

  return (
    <S.HeadContainer>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
      <S.Container>
        {/* Header content */}
        <HeadingBar />
        <TextHeading>{translations.debitCard}</TextHeading>
        <S.TextAvailable>{translations.availableBalance}</S.TextAvailable>
        <S.BoxCurrency>
          <S.BoxSymbol>
            <S.TextCurrency>{translations.currency}</S.TextCurrency>
          </S.BoxSymbol>
          <S.TextAmount>{cardDetails?.balance}</S.TextAmount>
        </S.BoxCurrency>
      </S.Container>
      <S.ScrollVertical>
        {/* card with card details*/}
        <S.CardBox>
          <Card data={cardDetails} />
        </S.CardBox>
        <S.EmptyBox />
        {/* progress view items*/}
        {cardLimit ? (
          <ProgressView total={cardLimit} spend={cardDetails?.spend} />
        ) : null}
        {/* option items*/}
        <Options
          heading={translations.page.head1}
          subHeading={translations.page.subHead1}
          img={imgCat1}
        />
        <Options
          heading={translations.page.head2}
          subHeading={
            cardLimit
              ? `${translations.yourWeeklySpending} ${cardLimit}`
              : translations.page.subHead2
          }
          img={imgCat2}
          button
          onPress={goToLimitScreen}
          active={cardLimit}
        />
        <Options
          heading={translations.page.head3}
          subHeading={translations.page.subHead3}
          img={imgCat3}
          button
        />
        <Options
          heading={translations.page.head4}
          subHeading={translations.page.subHead4}
          img={imgCat4}
        />
        <Options
          heading={translations.page.head5}
          subHeading={translations.page.subHead5}
          img={imgCat5}
        />
        <S.BottomBox />
      </S.ScrollVertical>
      {/* loading in case api data fetch*/}
      {isLoading ? (
        <S.LoaderView>
          <Loader size={50} />
        </S.LoaderView>
      ) : null}
    </S.HeadContainer>
  );
};

export default HomePage;
