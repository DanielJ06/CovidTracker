import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  padding: 25px;
  flex: 1;
  background: #303841;
`;

export const CountryContainer = styled.TouchableOpacity`
    background-color: #11999e;
    border-radius: 18px;
    padding: 30px 20px;
    margin-bottom: 18px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Name = styled.Text`
    font-weight: bold;
    font-size: 19px;
    color: #fff;
`;

export const List = styled.FlatList`
    margin-top: 25px;
`;

export const SearchArea = styled.View`
    background-color: #3a4750;
    padding: 18px;
    border-radius: 18px;
`;

export const Label = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 21px;
`;

export const SearchInput = styled.TextInput`
    background-color: #303841;
    border-radius: 8px;
    height: 45px;
    margin-top: 12px;
    color: #b3b3b3;
    font-weight: bold;
    padding: 0 12px;
`;