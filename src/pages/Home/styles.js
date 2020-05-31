import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  display: flex;
  padding: 25px;
  flex: 1;
  background: #303841;
`;

export const InfoCard = styled.View`
    background-color: #3a4750;
    border-radius: 18px;
    padding: 30px 20px;
    margin-top: 35px;
`;

export const InfoTitle = styled.Text`
    font-size: 28px;
    font-weight: bold;
    color: #fff;
`;

export const InfoDesc = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #b3b3b3;
    margin-top: 12px;
`;

export const BtnArea = styled.View`
    flex-direction: row;
    justify-content: space-around;
    margin-top: 35px;
`;

export const StatisticBtn = styled.TouchableOpacity`
    background-color: #00adb5;
    height: 55px;
    width: 125px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;

export const BtnText = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    margin-left: 5px;
`;