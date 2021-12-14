import React from 'react';
import {bool, func} from 'prop-types';

import imgBack from '../../assets/img_back.png';
import imgLogo from '../../assets/debit_card/img_logo.png';
import * as S from './style';

const HeadingBar = ({back, backPress}) => {
  return (
    <S.HeadContainer back={back}>
      {back ? (
        <S.BackBox onPress={backPress}>
          <S.BackImage source={imgBack} />
        </S.BackBox>
      ) : null}
      <S.LogoImage source={imgLogo} />
    </S.HeadContainer>
  );
};

HeadingBar.propTypes = {
  back: bool,
  backPress: func,
};

HeadingBar.defaultProps = {
  back: false,
  backPress: () => {},
};

export default HeadingBar;
