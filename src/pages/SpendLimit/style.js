import styled from 'styled-components/native';

import {statusbarHeight} from '../../utils/dimension';
import {isAndroid} from '../../utils/common';
import {TextMed, TextReg, TextDemiBold} from '../../UI/Text';
import {Colors} from '../../utils/Colors';

export const HeadContainer = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${Colors.primary};
`;

export const Container = styled.View`
  flex-direction: column;
  padding-top: ${statusbarHeight}px;
`;

export const EmptyBox = styled.View`
  width: 100%
  flex: 1;
  padding-horizontal: 24px;
  padding-top: 32px;
  margin-top: 40px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background-color: ${Colors.white};
`;

export const MeterImage = styled.Image`
  height: 16px;
  width: 16px;
`;

export const Heading = styled(TextMed)`
  font-size: 14px;
  line-height: 19px;
  margin-left: 12px;
  color: ${Colors.textColor2};
`;

export const SubHeading = styled(TextReg)`
  font-size: 13px;
  line-height: 18px;
  margin-top: 12px;
  color: ${Colors.textColor3};
`;

export const RowBox = styled.View`
  width: 100%;
  align-items: center;
  margin-top: ${({mt = 0}) => mt}px;
  flex-direction: row;
`;

export const Divider = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${Colors.divider};
`;

export const PriceBack = styled.TouchableOpacity`
  height: 40px;
  flex: 1;
  margin-left: 12px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: ${Colors.greenLite};
`;

export const PriceText = styled(TextDemiBold)`
  font-size: 12px;
  line-height: 16px;
  color: ${Colors.green};
`;

export const RowWrapper = styled.View`
  flex-direction: row;
  margin-top: 32px;
  margin-left: -10px;
  justify-content: space-between;
`;

export const EditText = styled.TextInput.attrs(() => ({
  placeholderTextColor: Colors.textColor4,
}))`
  margin-left: 10px;
  font-size: 24px;
  flex: 1;
  height: 50px;
  place-holder-text-color: ${Colors.textColor2};
  color: ${Colors.textColor2};
  ${isAndroid ? 'font-family: AvenirBold;' : 'font-weight: bold;'}
`;

export const BtnWrapper = styled.View`
  justify-content: space-between;
  position: absolute;
  bottom: 30px;
  left: 57px;
  right: 57px;
`;
