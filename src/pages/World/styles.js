import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  padding: 25px;
  flex: 1;
  background: #303841;
`;

export const Content = styled.View`
    background-color: #3a4750;
    border-radius: 18px;
    padding: 30px 20px;
`;

export const HeaderArea = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 32px;
    font-weight: bold;
    color: #fff;
    margin-left: 5px;
`;

export const DataContainer = styled.View`
    margin-top: 28px;
`;

export const Statistics = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 18px;
    background: #303841;
    margin-top: 21px;
    border-radius: 8px;
`;

export const DataType = styled.View`
    display: flex;
    align-items: center;
    flex-direction: row;
`;

export const DataNumber = styled.Text`
    font-size: 32px;
    font-weight: bold;
    color: #fff;
`;

export const Label = styled.Text`
    margin-left: 8px;
    color: #fff;
    font-weight: bold;
`;

export const Chart = styled.View`
    background-color: #3a4750;
    border-radius: 18px;
    margin-top: 12px;
    padding: 30px 20px;
`;