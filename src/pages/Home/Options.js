import React from 'react';
import {string, number, bool, func} from 'prop-types';

import imgToggleOff from '../../assets/debit_card/img_toggle_off.png';
import imgToggleOn from '../../assets/debit_card/img_toggle_on.png';
import * as S from '../style';

const Options = ({heading, subHeading, img, button, active, onPress}) => {
  return (
    <S.OptionBox>
      <S.OptionImage source={img} />
      <S.OptionTextBox>
        <S.OptionHead>{heading}</S.OptionHead>
        <S.OptionReg>{subHeading}</S.OptionReg>
      </S.OptionTextBox>
      {button ? (
        <S.OptionToggleBox onPress={onPress}>
          <S.OptionToggle source={active ? imgToggleOn : imgToggleOff} />
        </S.OptionToggleBox>
      ) : null}
    </S.OptionBox>
  );
};

Options.propTypes = {
  heading: string.isRequired,
  subHeading: string.isRequired,
  img: number.isRequired,
  button: bool,
  active: bool,
  onPress: func,
};

Options.defaultProps = {
  button: false,
  active: false,
  onPress: () => {},
};

export default Options;
