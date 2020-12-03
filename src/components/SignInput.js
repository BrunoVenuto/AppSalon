import React from 'react';
import styled from 'styled-components/native';

const InputArea = styled.View`
    width: 100%;
    height: 60px;
    background-color: #DA70D6;
    flex-direction: row;
    border-radius: 30px;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
`;
const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #8B008B;
    margin-left: 10px;
`;

export default ({IconSvg, placeholder, defaultValue, onChangeText, password}) => {
    return (
        <InputArea>
            <IconSvg width="24" height="24" fill="#8B008B" />
            <Input 
                placeholder={placeholder}
                placeholderTextColor="#8B008B"
                defaultValue={defaultValue}
                onChangeText={onChangeText}
                secureTextEntry={password}
            />
        </InputArea>
    );
}