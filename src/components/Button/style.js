import styled from 'styled-components/native';

import {Colors} from '../../utils/Colors';
import {TextDemiBold} from '../Text';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 56px;
  border-radius: 30px;
  padding-horizontal: 30px;
  align-items: center;
  justify-content: center;
  background-color: ${({disable}) => (disable ? Colors.disable : Colors.green)};
`;

export const Heading = styled(TextDemiBold)`
  font-size: 16px;
  line-height: 22px;
  align-self: center;
  color: ${Colors.white};
`;
