import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { UserContext } from '../../contexts/UserContext';
import { 
    Container,
    Avatar,
    Input
} from './style';

import Api from '../../Api';

export default () => {
    const navigation = useNavigation();
    const {state:user} = useContext(UserContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirm, setPassword_confirm] = useState('');


    const handleLogoutClick = async () => {
        await Api.logout();
        navigation.reset({
            routes:[{name:'SignIn'}]
        });
    }

    const updateUser = async () => {
        const token = await AsyncStorage.getItem('token');
        const req = await fetch('http://127.0.0.1:8000/api/user', {
            method: 'PUT',
            body: JSON.stringify({
                token,
                name,
                email,
                password,
                password_confirm
            }),
            
            headers:{
                'Content-Type': 'application/json'
            }
        });

        const json = await req.json();
        console.log(json);
        return json;
    }
    
    return (
        <Container>
            <Avatar source={{uri: user.avatar}} />
            <Input  value={name} onChangeText={t=>setName(t)} placeholder="Atualize seu nome" />
            <Input  value={email} onChangeText={t=>setEmail(t)} placeholder="Atualize seu e-mail" />
            <Input  value={password} onChangeText={t=>setPassword(t)} placeholder="Atualize sua senha" />
            <Input  value={password_confirm} onChangeText={t=>setPassword_confirm(t)} placeholder="Confirme sua senha" />
            <Button title="Sair" onPress={handleLogoutClick} />
            <Button title="Enviar" onPress={updateUser} />
        </Container>
    );
}