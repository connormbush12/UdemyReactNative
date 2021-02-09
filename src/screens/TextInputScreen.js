import React, {useState} from 'react'
import {Text, TextInput, View, StyleSheet} from 'react-native'

const TextInputScreen = () => {
    const [password, setPassword] = useState('')
    return (
        <View>
            <Text>Enter Password:</Text>
            <TextInput style={style.textInputBox} autoCapitalize="none" autoCorrect={false} value={password} onChangeText={(newValue) => {setPassword(newValue)}}/>
            {password.length < 5 ? <Text style={style.error}>Password needs to be longer than 5 characters</Text> : null}
        </View>
    )
}

const style = StyleSheet.create({
    textInputBox : {
        margin: 10,
        padding: 10,
        borderWidth: 3
    },
    error: {
        color: 'red',
    }
})

export default TextInputScreen