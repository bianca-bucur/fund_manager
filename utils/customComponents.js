import styled from 'styled-components/native';
import { normalizeFontSize } from './utils';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Dimensions } from 'react-native';

const height = Dimensions.get('screen').height;

const CustomTextInput = styled.TextInput`
  width: 50%;
  text-align: center;
  font-size: ${RFPercentage(4.2)}px;
  padding: 0px;
  height: 45px;
  border-color: gray;
  border-width: 1px;
`;


// font-size: ${normalizeFontSize(22)}px;
const TitleText = styled.Text`
  color: black;
  font-weight: bold;
  font-size: ${height > 700 ? RFPercentage(4.3) : RFPercentage(4.5)}px;
  margin: ${normalizeFontSize(6)}px;
  text-align: center;
  font-family: Arial;
`;

// font-size: ${normalizeFontSize(18)}px;
const DetailsText = styled.Text`
  font-size: ${height > 700 ? RFPercentage(2.7) : RFPercentage(3)}px;
  margin: ${normalizeFontSize(10)}px;
  text-align: center;
  font-family: Arial;
`;

const SmallDetailsText = styled(DetailsText)`
  font-size: ${height > 700 ? RFPercentage(2.2) : RFPercentage(2.5)}px;
`;

// font-size: ${normalizeFontSize(12)}px;
const BoldText = styled.Text`
  font-size: ${height > 700 ? RFPercentage(2.2) : RFPercentage(2.5)}px;
  text-align: center;
  font-weight: bold;
  font-family: Arial;
`;

// font-size: ${normalizeFontSize(18)}px;
const BigBoldText = styled(BoldText)`
  font-size: ${height > 700 ? RFPercentage(2.7) : RFPercentage(3)}px;
`;

const EVPresentText = styled(BigBoldText)`
  color: #50c6f1;
`;

const ChargingText = styled(BigBoldText)`
  color: #009e47;
`;

// width: ${PixelRatio.get()>=2?'30%':'40%'};
// height: ${PixelRatio.get()>=2?'35px':'50px'};
const CustomButton = styled.TouchableHighlight`
  color:  #50c6f1;
  background:#50c6f1;
  width: ${height>700?RFValue(37):RFValue(40)}%;
  height: ${height>700?RFValue(45):RFValue(50)}px;
  justify-content: center;
  text-align: center;
  position: relative;
  border-radius: 10px;
  elevation: 8;
`;

export {
  CustomTextInput,
  TitleText,
  DetailsText,
  SmallDetailsText,
  BoldText,
  BigBoldText,
  EVPresentText,
  ChargingText,
  CustomButton,
}