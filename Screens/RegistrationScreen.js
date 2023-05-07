import {StyleSheet, TextInput,Text, View} from 'react-native';
import React, {useState} from "react";

export default function RegistrationScreen(){
    const [isFocusedLogin, setIsFocusedLogin] = useState(false);
    const [isFocusedEmail, setIsFocusedEmail] = useState(false);
    const [isFocusedPassword, Is] = useState(false);
    const [inputValueLogin, setInputValueLogin] = useState('');
    const [inputValueEmail, setInputValueEmail] = useState('');
    const [inputValuePassword, setInputValuePassword] = useState('');
return (
    <View style={styles.container}>
        <View>
            {!isFocusedLogin && inputValueLogin === '' && (
                <Text style={styles.placeholder}>Логін</Text>
            )}
            <TextInput  style={styles.textInput}
                        onFocus={() => setIsFocusedLogin(true)}
                        onBlur={() => setIsFocusedLogin(false)}
                        onChangeText={text => setInputValueLogin(text)}
                        value={inputValueLogin}>

            </TextInput>
        </View>

        <View>
            {!isFocusedEmail && inputValueEmail === '' && (
                <Text style={styles.placeholder}>Адреса електронної пошти</Text>
            )}
            <TextInput  style={styles.textInput}
                        onFocus={() => setIsFocusedEmail(true)}
                        onBlur={() => setIsFocusedEmail(false)}
                        onChangeText={text => setInputValueEmail(text)}
                        value={inputValueEmail}>

            </TextInput>
        </View>

        <View>
            {!isFocusedPassword && inputValuePassword === '' && (
                <Text style={styles.placeholder}>Пароль</Text>
            )}
            <TextInput  style={[styles.textInput, styles.lastInput]}
                        onFocus={() => setInputValuePassword(true)}
                        onBlur={() => setInputValuePassword(false)}
                        onChangeText={text => setInputValuePassword(text)}
                        value={inputValuePassword}>

            </TextInput>
        </View>
    </View>
)
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFFFFF',
        paddingTop:20,
        paddingBottom:20
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    textInput: {
        borderWidth:1,
        borderColor:'#E8E8E8',
        backgroundColor:'#F6F6F6',
        height:50,
        paddingLeft:16,
        color:"#212121",
        fontSize:16,
        marginHorizontal:16,
        marginBottom:16
    },
    lastInput:{
        marginBottom:0
    },
    placeholder: {
        position: 'absolute',
        top: 13,
        left: 20,
        fontSize: 16,
        color: '#BDBDBD',
        zIndex: 999
    }
})

