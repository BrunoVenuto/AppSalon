import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #EE82EE;
    justify-content: center;
    align-items: center;
`;

export const Input = styled.TextInput`
    width: 240px;
    height: 40px;
    background-color: #DA70D6;
    margin: 5px;
    border-radius: 20px;
    padding: 0 20px;
`;

export const Avatar = styled.Image`
    width: 140px;
    height: 140px;
    border-radius: 20px;
    margin-right: 20px;
`;
export const SearchArea = styled.View`
    background-color: #DA70D6;
    height: 40px;
    border-radius:  20px;
    padding: 0 20px;
    margin: 20px;
    margin-bottom: 0px;
`;

export const SearchInput = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #FFFFFF;
`;