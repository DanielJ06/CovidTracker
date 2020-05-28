import styled from 'styled-components/native';

export const Container = styled.View`
    margin-top: 25px;
`;

export const CardContainer = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false
})``;

export const Category = styled.Text`
    font-size: 28px;
    font-weight: bold;
    color: #fff
`;

export const Content = styled.View`
    background: #3a4750;
    padding: 12px;
    border-radius: 20px;
    margin-top: 12px;
    margin-right: 12px;
    align-items: center;
    width: 150px;
    height: 150px;
`;

export const Img = styled.Image`
    height: 75px;
    width: 75px;
`;

export const Label = styled.Text`
    color: #fff;
    font-weight: bold;
    margin-top: 18px;
`;