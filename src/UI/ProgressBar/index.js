import React from 'react';
import {number} from 'prop-types';
import * as Progress from 'react-native-progress';

import {windowWidth} from '../../utils/dimension';
import {Colors} from '../../utils/Colors';
import * as S from './style';

const ProgressBar = ({fillBar}) => {
  return (
    <S.Container>
      <Progress.Bar
        progress={fillBar}
        width={windowWidth - 48}
        unfilledColor={Colors.greenLite}
        borderColor={Colors.white}
        color={Colors.green}
        height={15}
        borderRadius={15}
      />
    </S.Container>
  );
};

ProgressBar.propTypes = {
  fillBar: number,
};

ProgressBar.propTypes = {
  fillBar: 0.0,
};

export default ProgressBar;
