import styled from 'styled-components/native';

import {TextBold, TextDemiBold} from '../../../UI/Text';
import {Colors} from '../../../utils/Colors';

export const TopContainer = styled.View`
  background-color: ${Colors.transparent};
`;

export const Container = styled.View`
  margin-horizontal: 24px;
  padding-horizontal: 24px;
  padding-vertical: 10px;
  border-radius: 15px;
  margin-top: 30px;
  background-color: ${Colors.green};
`;

export const LogoImg = styled.Image`
  height: 21px;
  position: absolute;
  top: 24px;
  right: 24px;
`;

export const VisaImg = styled.Image`
  height: 21px;
  position: absolute;
  bottom: 24px;
  right: 24px;
`;

export const TextName = styled(TextBold)`
  font-size: 22px;
  line-height: 30px;
  margin-top: 69px;
  color: ${Colors.white};
`;

export const TextCardNum = styled(TextDemiBold)`
  font-size: 14px;
  line-height: 17px;
  margin-top: 24px;
  margin-left: ${({ml = 0}) => ml}px;
  color: ${Colors.white};
`;

export const TextNum = styled(TextDemiBold)`
  font-size: 13px;
  line-height: 17px;
  margin-top: 24px;
  margin-left: ${({ml = 0}) => ml}px;
  color: ${Colors.white};
`;

export const RowBox = styled.View`
  flex-direction: row;
  margin-bottom: ${({mb = 0}) => mb}px;
`;

export const HideBox = styled.TouchableOpacity`
  padding-horizontal: 15px;
  border-radius: 6px;
  height: 44px;
  flex-direction: row;
  padding-top: 8px;
  position: absolute;
  right: 24px;
  background-color: ${Colors.white};
`;

export const TextHide = styled(TextDemiBold)`
  font-size: 12px;
  line-height: 16px;
  margin-left: 6px;
  color: ${Colors.green};
`;

export const HideImg = styled.Image`
  height: 16px;
  width: 16px;
`;
