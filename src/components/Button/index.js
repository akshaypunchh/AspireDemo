import React from 'react';
import {string, bool, func} from 'prop-types';

import * as S from './style';

const Button = ({heading, disable, onPress}) => {
  return (
    <S.Container disable={disable} onPress={onPress}>
      <S.Heading>{heading}</S.Heading>
    </S.Container>
  );
};

Button.propTypes = {
  disable: bool,
  heading: string,
  onPress: func.isRequired,
};

Button.defaultProps = {
  heading: '',
  disable: false,
};

export default Button;
