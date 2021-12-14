import styled from 'styled-components/native';

import {statusbarHeight} from '../../utils/dimension';
import {TextBold, TextDemiBold, TextMed, TextReg} from '../../components/Text';
import {Colors} from '../../utils/Colors';

export const HeadContainer = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${Colors.primary};
`;

export const ScrollVertical = styled.ScrollView`
  width: 100%;
  flex: 1;
  padding-top: ${statusbarHeight}px;
  background-color: ${Colors.transparent};
`;

export const Container = styled.View`
  position: absolute;
  top: ${statusbarHeight}px;
  left: 0;
  right: 0;
`;

export const ContainerText = styled.View`
  flex: 1;
`;

export const TextHeading = styled(TextBold)`
  font-size: 24px;
  line-height: 33px;
  margin-top: 32px;
  margin-left: 24px;
  color: ${Colors.white};
`;

export const TextAvailable = styled(TextMed)`
  font-size: 14px;
  line-height: 19px;
  margin-top: 24px;
  margin-left: 24px;
  color: ${Colors.white};
`;

export const TextAmount = styled(TextBold)`
  font-size: 24px;
  line-height: 33px;
  margin-left: 10px;
  color: ${Colors.white};
`;

export const TextCurrency = styled(TextBold)`
  font-size: 12px;
  line-height: 16px;
  color: ${Colors.white};
`;

export const BoxSymbol = styled.View`
  margin-left: 24px;
  height: 22px;
  width: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border-width: 1px;
  background-color: ${Colors.green};
`;

export const BoxCurrency = styled.View`
  flex-direction: row;
  margin-top: 10px;
  align-items: center;
`;

export const LoaderView = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.pBackOpacity};
`;

export const EmptyBox = styled.View`
  width: 100%
  height: 190px;
  margin-top: 260px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background-color: ${Colors.white};
`;

export const BottomBox = styled.View`
  width: 100%
  height: 50px;
  background-color: ${Colors.white};
`;

export const CardBox = styled.View`
  width: 100%
  position: absolute;
  top: 165px;
  z-index: 1;
`;

// option view

export const OptionBox = styled.View`
  width: 100%
  padding-horizontal: 24px;
  padding-vertical: 17px;
  flex-direction: row;
  background-color: ${Colors.white};
`;

export const OptionImage = styled.Image`
  height: 32px;
  width: 32px;
`;

export const OptionHead = styled(TextMed)`
  font-size: 14px;
  line-height: 19px;
  color: ${Colors.textColor1};
`;

export const OptionReg = styled(TextReg)`
  font-size: 13px;
  line-height: 18px;
  opacity: 0.4;
  margin-top: 2px;
  color: ${Colors.textColor2};
`;

export const OptionTextBox = styled.View`
  margin-left: 12px;
`;

export const OptionToggle = styled.Image`
  height: 20px;
  width: 34px;
  position: absolute;
  right: 24px;
  top: 17px;
`;

// Progress view

export const ProgressHeading = styled(TextMed)`
  font-size: 13px;
  line-height: 18px;
  color: ${Colors.textColor2};
`;

export const ProgressBox = styled.View`
  width: 100%;
  padding-top: 26px;
  background-color: ${Colors.white};
`;

export const ProgressLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProgressTop = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 6px;
  padding-horizontal: 24px;
  justify-content: space-between;
`;

export const ProgressDivide = styled.View`
  width: 1px;
  height: 10px;
  margin-horizontal: 5px
  background-color: ${Colors.textColor3};
`;

export const ProgressSpend = styled(TextDemiBold)`
  font-size: 13px;
  line-height: 18px;
  color: ${Colors.green};
`;

export const ProgressTotal = styled(TextMed)`
  font-size: 13px;
  line-height: 18px;
  color: ${Colors.textColor3};
`;
