import styled from 'styled-components/native';

import {Colors} from '../../utils/Colors';

export const HeadContainer = styled.View`
  width: 100%;
  height: 56px;
  flex-direction: row;
  padding-horizontal: 24px;
  align-items: center;
  justify-content: ${({back}) => (back ? 'space-between' : 'flex-end')};
  background-color: ${Colors.primary};
`;

export const BackBox = styled.TouchableOpacity`
  align-items: center;
`;

export const BackImage = styled.Image`
  height: 25px;
  width: 25px;
  margin-left: -10px;
`;

export const LogoImage = styled.Image`
  height: 25px;
  width: 25px;
`;
